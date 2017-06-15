// tools
import React from "react"
import axios from "axios"
import { Link } from "react-router"
import { ModalLink } from "../../Modal"


// components
import { Bleed, List, Stats, Caption, ZigzagPicture } from "../../../components/List"
import { Description } from "../../../components/List/components/Description"
import { Section, Article } from "../../../components/Article"


// state
import defaultListState from "./state.json"

// helper
import { datestamp, compleFilterString } from "./helpers"

// routes
import { ROUTE_LIST_API, ROUTE_ARTICLE_DIR } from "./routes"




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
				
				// save state
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
			
			
				<Description>
					<div>
							{
								this.state.filters.author
								? <ModalLink
									title={ this.state.filters.author.name }
									fetch={ "/api/author/" + this.state.filters.author.id }
								>
									<q><em>
										{ compleFilterString(this.props.location.pathname).routeDescription.description } 
										<u>{ this.state.filters.author.name || "" }</u>
									</em></q> 
								</ModalLink>
								: <q><em>{ compleFilterString(this.props.location.pathname).routeDescription.description }</em></q> 
							}
						&nbsp;{ compleFilterString(this.props.location.pathname).routeDescription.emoji }
					</div>
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