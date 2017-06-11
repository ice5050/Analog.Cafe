// tools
import React from "react"
import axios from "axios"
import { Link } from "react-router"

// components
import { Bleed, List, Stats, Caption, ZigzagPicture } from "../../../components/List"
import { Description } from "../../../components/List/components/Description"

// state
import defaultListState from "./state.json"

// routes
import { API_LOCATION, ROUTE_FILTERS, ROUTE_DESCRIPTIONS } from "./routes"



// render
export class ListArticles extends React.Component {
	state = defaultListState
  
  _fetch = () => {
    
    // convert route to api tag search
    let filter = ROUTE_FILTERS[this.props.location.pathname]
    filter = filter ? "/filter-" + filter : "/index"
    
    // fetch & update state
  	if(this.state.filter === filter) return
  	axios.get(API_LOCATION + filter + ".json")
			.then(response => {
				let data = response.data
				this.setState({
					status: data.status,
					filter,
					items: data.items
				})
			})
			.catch(error => console.log(error))
  }
  
  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()
	// need condition for componentWillUnmount()

	render() {
	
		const datestamp = (unix) => {
			const m = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
			let date = new Date(unix * 1000)
			let year = date.getFullYear()
			let month = m[date.getMonth()]
			let day = date.getDate()
			return month + " " + day + ", " + year
		}
		
		return(
			<div>
				<Description emoji={ ROUTE_DESCRIPTIONS[this.props.location.pathname].emoji }>
					{ ROUTE_DESCRIPTIONS[this.props.location.pathname].description }
				</Description>
				<Bleed>
					<List listStatus={ this.state.status }>
					{
						this.state.items.map(function(item) {
							return (
								<li key={ item.id }>
									<Link to={ item.url }>
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
			</div>
		)
	}
}

//Date(item["post-date"]).getMonth()
//style={"background-image" : "url({ item.images.poster })"}
					
