// tools
import React from "react"
import axios from "axios"
import { ModalLink } from "../../Modal"


// components
import { Bleed } from "../../../components/List"
import { Description } from "../../../components/List/components/Description"
import { Section, Article } from "../../../components/ArticleStyles"
import { PageButton } from "../../../components/Button"
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

  	//
  	// this function, as well as getListHeaders() heavily relies on URL
  	//

  	// filter either by author or tags (but not both)
  	let pathname = this.props.location.pathname
  	let uriParams = getListHeaders(pathname, page).search


    // proceed only if the search parameters are different from already loaded page
  	if(this.state.page.loaded === uriParams) return


		// fetch & update state
		axios.get(ROUTE_LIST_API + uriParams + ".json")
			.then(response => {
				let data = response.data
				let items = data.items

				// grow list only if...
				if(
					// it's not a placeholder
					this.state.items[0].type !== "placeholder"
					// second (or later) page received
					&& parseInt(data.page.current, 0) > 1
				)
				items = [...this.state.items, ...data.items]

				// save state
				this.setState({
					status: 			data.status,
					filters:			data.filters,

					page:					{...data.page, loaded: uriParams},
					pathname,
					items,
				})
			})
			.catch(error => console.log(error))
  }

  handleMore = e => {
  	e.preventDefault()
  	this._fetch(parseInt(this.state.page.current, 0) + 1)
  }

  // load on mount
  componentDidMount = () => this._fetch()

  // load on url change (reset the state)
  componentDidUpdate = () => {
  	if(this.props.location.pathname !== this.state.pathname) this._fetch()
  }

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
