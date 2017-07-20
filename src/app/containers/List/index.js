// tools
import React from "react"
import axios from "axios"
import { withRouter } from "react-router"
import { ModalDispatch } from "../Modal"


// components
import ListDescription from "../../components/ListDescription"
import { LinkButton } from "../../components/Button"
import { default as ListBlock } from "../../components/List"
import { Section, Article } from "../../components/ArticleStyles"

// state
import defaultListState from "./state.json"

// helper
import { getListHeaders } from "./helpers"

// routes
import { ROUTE_LIST_API } from "./routes"


// render
class List extends React.Component {
	state = defaultListState
  _fetch = (page=1) => {

  	//
  	// this function, as well as getListHeaders() heavily relies on URL
  	//

  	// filter either by author or tags (but not both)
  	let pathname = this.state.pathname
  	let uriParams = getListHeaders(pathname, page).search


    // proceed only if the search parameters are different from already loaded page
		console.log(uriParams, pathname)
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
  componentDidMount = () => {

		this.setState({
			pathname: this.props.location.pathname
		})
		console.log(this.props.location.pathname)
		this._fetch()

		this.props.history.listen((location, action) => {
			this.setState({
				pathname: location.pathname
			})
			this._fetch()
    })
	}



	render() {
		return(
			<div>
				<ListDescription>
					<div>
							{
								this.state.filters.author ?
									<q><em>
										{ getListHeaders(this.state.pathname).meta.text }
										{ this.state.filters.author.name &&
											<ModalDispatch
												with={{
													request: {
														url: "/api/author/" + this.state.filters.author.id
													}
												}}
											>{ this.state.filters.author.name }</ModalDispatch> }
									</em></q>
								: <q><em>{ getListHeaders(this.state.pathname).meta.text }</em></q>
							}
						&nbsp;{ getListHeaders(this.state.pathname).meta.emoji }
					</div>
				</ListDescription>
				<ListBlock  status={ this.state.status } items={ this.state.items } />

				{ parseInt(this.state.page.total, 0) > 1 && parseInt(this.state.page.total, 0) > parseInt(this.state.page.current, 0) ? <LinkButton to="#more" red onClick={ this.handleMore.bind(this)} >Load More</LinkButton> : null }

				<Article><Section /></Article>
			</div>
		)
	}
}

export default withRouter(List)
