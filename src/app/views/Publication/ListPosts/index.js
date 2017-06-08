// tools
import React from "react"
import axios from "axios"
import { Link } from "react-router"


// components
import { Bleed, List, Stats, Caption, ZigzagPicture } from "../../../components/List"
import { Description } from "../../../components/List/components/Description"


// dictionary
const API_ROUTE_LIST = "/api/list"

// render
export class ListPosts extends React.Component {
	state = {
		"filter" : "",
		"items" : [ ]
	}
  _fetch = () => {
    const filter = this.props.location.pathname === "/" ? "/index" : this.props.location.pathname
  	if(this.state.filter === filter) return
  	axios.get(API_ROUTE_LIST + filter + ".json")
			.then(response => {
				let data = response.data
				this.setState({
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
		return(
			<div>
				<Description emoji="🎑">Curated photo essays and film photography</Description>
				<Bleed>
					<List>
					{
						this.state.items.map(function(item) {
							return (
								<li key={ item.id }>
									<Link to={ item.url }>
										<section>
											<figure>
												<img src={ item.poster.medium } alt={ item.title + " poster image" } />
											</figure>
											<h2>{ item.title }</h2>
											<Caption>{ item.summary }</Caption>
											<div>
												<Stats>{ item["category-name"] } | { item.category === "essay" ? Math.round(item.stats.words / 200) + "-minute read" : item.stats.images + " Images" }</Stats>
												<em>{ item.author.name } · {  } 12, 2017</em>
											</div>
										</section>
										<ZigzagPicture style={{ backgroundImage: `url("/images/uploads/poster.jpg")` }} />
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
					
