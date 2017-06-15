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
  
  _fetch = (page=1) => {
  	
  	// filter either by author or tags (but not both)
  	let uri = this.props.location.pathname
  	let uriParams = getListHeaders(uri, page).search

    
    // do not load same page...
    console.log(this.state.page.loaded === uriParams)
  	if(this.state.page.loaded === uriParams) return
  	
		
		
		// fetch & update state
		axios.get(ROUTE_LIST_API + uriParams + ".json")
			.then(response => {
				let data = response.data
				let items = data.items
				
				// grow list if only the page number has changed (url hasn't changed)
				console.log(this.state.page.loaded)
				if(this.state.items[0].type !== "placeholder") 
					items = [...this.state.items, ...data.items]
				
				// save state
				this.setState({
					status: 			data.status,
					filters:			data.filters,

					page:					{...data.page, loaded: uriParams},
					items,
				})
			})
			.catch(error => console.log(error))
  }
  
  handleMore = e => {
  	e.preventDefault()
  	console.log(parseInt(this.state.page.current, 0) + 1)
  	this._fetch(parseInt(this.state.page.current, 0) + 1)
  }
  
  componentDidMount = () => this._fetch()
  //componentDidUpdate = () => this._fetch()
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
				
				{ parseInt(this.state.page.total, 0) > 1 && parseInt(this.state.page.total, 0) > parseInt(this.state.page.current, 0) ? <PageButton to="#more" red onClick={ this.handleMore.bind(this)} >Load More</PageButton> : null }


				<Article><Section /></Article>
			</div>
		)
	}
}