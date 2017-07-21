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


class List extends React.Component {
	fetchNewList = () => {
		this.props.fetchListPage({
			url: ROUTE_LIST_API + getListHeaders(this.props.history.location.pathname, this.props.list.page.current).search
		})
	}
	componentWillMount() {
    this.unlisten = this.props.history.listen(location => this.fetchNewList())
		this.fetchNewList()
  }
  componentWillUnmount() {
    this.unlisten()
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

				{
					// parseInt(props.list.page.total, 0) > 1 && parseInt(props.list.page.total, 0) > parseInt(props.list.page.current, 0) ?
					// <LinkButton to="#more" red onClick={ console.log("more") }>Load More</LinkButton> : null
				}

				<Article><Section /></Article>
			</div>
		)
	}
}


// connet with redux
const mapStateToProps = state => { console.log("state updated")
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
