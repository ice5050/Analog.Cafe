// tools
import React from "react"
import { withRouter } from "react-router"
import { ModalDispatch } from "../Modal"

// redux & state
import { connect } from "react-redux"
import { fetchListPage } from "../../../actions/listActions"
import { ROUTE_LIST_API } from "./routes"


// components
import ListDescription from "../../components/ListDescription"
import { LinkButton } from "../../components/Button"
import { default as ListBlock } from "../../components/List"
import { Section, Article } from "../../components/ArticleStyles"


// helper
import { getListHeaders } from "./helpers"


// handleMore = (e) => {
// 	console.log("more")
// // 	e.preventDefault()
// // 	this._fetch(parseInt(this.state.page.current, 0) + 1)
// }
// componentDidMount = () => {
// 	//
// 	// this.setState({
// 	// 	pathname: props.location.pathname
// 	// })
// 	// console.log(props.location.pathname)
// 	// this._fetch()
//
// 	props.history.listen((location, action) => {
// 		// this.setState({
// 		// 	pathname: location.pathname
// 		// })
// 		this._fetch()
// 		console.log("history change")
// 	})
// 	this._fetch()
// 	console.log("componentDidMount")
//
// }

// render
const List  = props => {
	props.history.listen((location, action) => { console.log("history")
		props.fetchListPage({
			url: ROUTE_LIST_API + getListHeaders(location.pathname, props.list.page.current).search
		})
	})
	return(
		<div>
			<ListDescription>
				<div>
						{
							props.list.filters.author ?
								<q><em>
									{ getListHeaders(props.location.pathname).meta.text }
									{ props.list.filters.author.name &&
										<ModalDispatch
											with={{
												request: {
													url: "/api/author/" + props.list.filters.author.id
												}
											}}
										>{ props.list.filters.author.name }</ModalDispatch> }
								</em></q>
							: <q><em>{ getListHeaders(props.location.pathname).meta.text }</em></q>
						}
					&nbsp;{ getListHeaders(props.location.pathname).meta.emoji }
				</div>
			</ListDescription>

			<ListBlock  status={ props.list.status } items={ props.list.items } />

			{
				// parseInt(props.list.page.total, 0) > 1 && parseInt(props.list.page.total, 0) > parseInt(props.list.page.current, 0) ?
				// <LinkButton to="#more" red onClick={ console.log("more") }>Load More</LinkButton> : null
			}

			<Article><Section /></Article>
		</div>
	)
}


// connet with redux
const mapStateToProps = state => {
	console.log("Updated state",state)
	return {
    list: state.list,
	}
}
const mapDispatchToProps = dispatch => {
	return {
    fetchListPage: request => {
			dispatch(fetchListPage(request))
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps /*, null, {pure: false}*/ )(List))
