// tools
import React from "react"
import axios from "axios"
import { Link } from "react-router"


// components
import { Section, Article } from "../../../components/Article"

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
// 				try { data = JSON.parse(response.data) }
// 				catch (error) { return console.log(error) }
				console.log(data)
				this.setState({
					filter,
					items: data.items
				})
			})
			.catch(error => console.log(error))
  }
  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()

//   
//   componentWillUnmount = function() {
//     this.serverRequest.abort();
//   }

	render() {
		return(
			<Article>
				<Section>
					<p>{ API_ROUTE_LIST + this.state.filter }</p>
					<ul>
					{
						this.state.items.map(function(item) {
							return (
								<li key={ item.id }>
									<Link to={ item.url }>
										<section>
											<figure>
												<img src={ item.images.poster } alt={ item.title + " poster image" } />
											</figure>
											<h2>{ item.title }</h2>
											<p>{ item.summary }</p>
											<div>
												<span>{ item["category-name"] } | { item.category === "essay" ? item.stats.words / 200 + "-minute read" : item.stats.images + " Images" }</span>
												<em>{ item.author.name } · {  } 12, 2017</em></div>
										</section>
										<figure ></figure>
									</Link>
								</li>
							)
						})
					}
					</ul>
				</Section>
			</Article>
		)
	}
}

//Date(item["post-date"]).getMonth()
//style={"background-image" : "url({ item.images.poster })"}
					
