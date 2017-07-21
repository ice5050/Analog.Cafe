// tools
import React from "react"
import { withRouter } from "react-router"
import { ModalDispatch } from "../Modal"

// redux & state
import { connect } from "react-redux"
import { resetList, fetchInsert } from "../../../actions/listActions"
import { ROUTE_LIST_API } from "./routes"


// components
import ListDescription from "../../components/ListDescription"
import { LinkButton } from "../../components/Button"
import { default as ListBlock } from "../../components/List"
import { Section, Article } from "../../components/ArticleStyles"


// helper
import { getListHeaders } from "./helpers"



// render
class List extends React.Component {
  _fetch = (/*page=1*/) => {

  	// filter either by author or tags (but not both)
  	// let pathname = this.state.pathname
  	let uriParams = getListHeaders(
			this.props.location.pathname,
			this.props.list.page.current
		).search

    // // proceed only if the search parameters are different from already loaded page
  	// if(this.state.page.loaded === uriParams) return

		this.props.fetchInsert({
			url: ROUTE_LIST_API + uriParams
		})

		// // fetch & update state
		// axios.get(ROUTE_LIST_API + uriParams + ".json")
		// 	.then(response => {
		// 		let data = response.data
		// 		let items = data.items
		//
		// 		// grow list only if...
		// 		if(
		// 			// it's not a placeholder
		// 			this.state.items[0].type !== "placeholder"
		// 			// second (or later) page received
		// 			&& parseInt(data.page.current, 0) > 1
		// 		)
		// 		items = [...this.state.items, ...data.items]
		//
		// 		// save state
		// 		this.setState({
		// 			status: 			data.status,
		// 			filters:			data.filters,
		//
		// 			page:					{...data.page, loaded: uriParams},
		// 			pathname,
		// 			items,
		// 		})
		// 	})
		// 	.catch(error => console.log(error))
  }
  handleMore = e => {
		console.log("more")
  // 	e.preventDefault()
  // 	this._fetch(parseInt(this.state.page.current, 0) + 1)
  }

  // load on mount
  componentDidMount = () => {
		//
		// this.setState({
		// 	pathname: this.props.location.pathname
		// })
		// console.log(this.props.location.pathname)
		// this._fetch()

		this.props.history.listen((location, action) => {
			// this.setState({
			// 	pathname: location.pathname
			// })
			this._fetch()
    })
		this._fetch()

	}



	render() {
		return(
			<div>
				<ListDescription>
					<div>
							{
								this.props.list.filters.author ?
									<q><em>
										{ getListHeaders(this.props.location.pathname).meta.text }
										{ this.props.list.filters.author.name &&
											<ModalDispatch
												with={{
													request: {
														url: "/api/author/" + this.props.list.filters.author.id
													}
												}}
											>{ this.props.list.filters.author.name }</ModalDispatch> }
									</em></q>
								: <q><em>{ getListHeaders(this.props.location.pathname).meta.text }</em></q>
							}
						&nbsp;{ getListHeaders(this.props.location.pathname).meta.emoji }
					</div>
				</ListDescription>

				<ListBlock  status={ this.props.list.status } items={ this.props.list.items } />

				{ parseInt(this.props.list.page.total, 0) > 1 && parseInt(this.props.list.page.total, 0) > parseInt(this.props.list.page.current, 0) ? <LinkButton to="#more" red onClick={ this.handleMore.bind(this)} >Load More</LinkButton> : null }

				<Article><Section /></Article>
			</div>
		)
	}
}


// connet with redux
const mapStateToProps = state => {
	return {
    list: state.list,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		resetList: () => {
			dispatch(resetList())
		},
    fetchInsert: request => {
			dispatch(fetchInsert(request))
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure: false} )(List))
