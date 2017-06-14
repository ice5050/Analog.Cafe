// tools
import React from "react"
import axios from "axios"
import { Link } from "react-router"

// components
import { Bleed, List, Stats, Caption, ZigzagPicture } from "../../../components/List"
import { Description } from "../../../components/List/components/Description"
import { Section, Article } from "../../../components/Article"


// state
import defaultListState from "./state.json"

// routes
import { ROUTE_LIST_API, ROUTE_FILTERS, ROUTE_DESCRIPTIONS, ROUTE_ARTICLE_DIR } from "./routes"


// helper
const datestamp = unix => {
	const m = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
	let date = new Date(unix * 1000)
	let year = date.getFullYear()
	let month = m[date.getMonth()]
	let day = date.getDate()
	return month + " " + day + ", " + year
}
const compleFilterString = url => {
	url = url ? url : "/"
	let filters
	let routeDescription
	
	// filter by author name
	if(url.includes("/author/")){
		let authorId = url.match(/\/author\/(.*)/)[1]
		authorId = authorId ? "/author-" + authorId : "/index"
		
		filters = { author: { id: authorId } }
		routeDescription = {
			description: ROUTE_DESCRIPTIONS["/author/*"].description,
			emoji: ROUTE_DESCRIPTIONS["/author/*"].emoji
		}
	}
	
	// filter by tags
	else {
		let tags
		tags = ROUTE_FILTERS[url]
    tags = tags ? "/tags-" + tags : "/index"
    filters = { tags }
    routeDescription =  ROUTE_DESCRIPTIONS[url]
	}
	return { filters, routeDescription }
}

// render
export class ListPosts extends React.Component {
	state = defaultListState
  
  _fetch = () => {
  	let url = this.props.location.pathname
  	let compiledFilters = compleFilterString(url).filters.tags || compleFilterString(url).filters.author.id

    // fetch & update state
  	if(this.state.compiledFilters === compiledFilters) return
  	axios.get(ROUTE_LIST_API + compiledFilters + ".json")
			.then(response => {
				let data = response.data
				this.setState({
					status: 		data.status,
					items: 			data.items,
					filters:		data.filters,
					compiledFilters,
				})
			})
			.catch(error => console.log(error))
  }
  
  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()
	// need condition for componentWillUnmount()

	render() {
		
		return(
			<div>
				<Description
					emoji={ compleFilterString(this.props.location.pathname).routeDescription.emoji }
				>
					{ compleFilterString(this.props.location.pathname).routeDescription.description }
						<Link to="/">{ this.state.filters.author.name || "" }</Link>.
				</Description>
				<Bleed>
					<List listStatus={ this.state.status }>
					{
						this.state.items.map(function(item) {
							return (
								<li key={ item.id }>
									<Link to={ item.slug ? ROUTE_ARTICLE_DIR + "/" + item.slug : null }>
										<section>
											<figure>
												{ item.type !== "placeholder" ? <img src={ item.poster.medium } alt={ item.title + " poster image" } /> : null }
											</figure>
											<h2>{ item.title }</h2>
											<Caption>{ item.summary }</Caption>
											<div>
												<Stats>{
													( item.category === "photo-essay" && item.stats.images === "1" ) ? "Photograph" :
													(item.category + "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
												}{
													item.type !== "placeholder" ?
														( item.category !== "photo-essay" ) ? 
														" | " 
															+ Math.round(item.stats.words / 200) 
															+ "-minute read" :
														" | " 
															+ item.stats.images + " Image" + (item.stats.images > 1 ? "s" : "")
													: null
												}</Stats>
												<em>{ item.author.name }{ item.type !== "placeholder" ? " · " + datestamp(item["post-date"]) : null }</em>
											</div>
										</section>
										<ZigzagPicture style={ item.type !== "placeholder" ? { backgroundImage: `url(${ item.poster.medium })` } : null } />
									</Link>
								</li>
							)
						})
					}
					</List>
				</Bleed>
				<Article><Section /></Article>
			</div>
		)
	}
}