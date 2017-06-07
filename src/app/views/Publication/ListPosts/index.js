// tools
import React from "react"
import axios from "axios"

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
				console.log(response)
				this.setState({
					filter,
					items: response.data.items
				})
			})
			.catch(error => console.log(error))
  }
  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()
  
//   componentDidUpdate = () => {
//   	const filter = this.props.location.pathname === "/" ? "/index" : this.props.location.pathname
//   	if(this.state.filter === filter) return
//   	axios.get(API_ROUTE_LIST + filter + ".json")
// 			.then(response => {
// 				console.log(response)
// 				this.setState({
// 					filter,
// 					items: response.data.items
// 				})
// 			})
// 			.catch(error => console.log(error))
//   }

//   
//   componentWillUnmount = function() {
//     this.serverRequest.abort();
//   }

	render() {
		return(
			<Article>
				<Section>
					<p>{ API_ROUTE_LIST + this.state.filter }</p>
					{
						this.state.items.map(function(items) {
							return (
								<div key={items.type}>
									<h2>{ items.title }</h2>
									<p>{ items.type }</p>
								</div>
							)
						})
					}
				</Section>
			</Article>
		)
	}
}


					
