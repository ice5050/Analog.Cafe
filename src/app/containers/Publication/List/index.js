// tools
import React from "react"
import axios from "axios"
import { ModalLink } from "../../Modal"


// components
import { Bleed } from "../../../components/List"
import { Description } from "../../../components/List/components/Description"
import { Section, Article } from "../../../components/Article"
import { PageButton } from "../../../components/Buttons"
import { ListBlock } from "./components/ListBlock"


// state
import defaultListState from "./state.json"

// helper
import { getListHeaders } from "./helpers"

// routes
import { ROUTE_LIST_API } from "./routes"




// render
export class ListPosts extends React.Component {
	state = defaultListState
  
  _fetch = () => {
  	
  	// filter either by author or tags (but not both)
  	let url = this.props.location.pathname
  	let uriParams = getListHeaders(url, 2).search 

    // fetch & update state
  	if(this.state.uriParams === uriParams) return
  	axios.get(ROUTE_LIST_API + uriParams + ".json")
			.then(response => {
				let data = response.data
				
				// save state
				this.setState({
					status: 		data.status,
					items: 			data.items,
					filters:		data.filters,
					page:				data.page,
					
					uriParams,
					
				})
			})
			.catch(error => console.log(error))
  }
  
  handleMore = e => {
  	e.preventDefault()
  	alert(1)
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
										{ getListHeaders(this.props.location.pathname).meta.text } 
										<u>{ this.state.filters.author.name || "" }</u>
									</em></q> 
								</ModalLink>
								: <q><em>{ getListHeaders(this.props.location.pathname).meta.text }</em></q> 
							}
						&nbsp;{ getListHeaders(this.props.location.pathname).meta.emoji }
					</div>
				</Description>
				
				
				<Bleed>
					<ListBlock  status={ this.state.status } items={ this.state.items } />
				</Bleed>
				
				<PageButton to="#more" red onClick={ this.handleMore.bind(this)} >Load More</PageButton>


				<Article><Section /></Article>
			</div>
		)
	}
}