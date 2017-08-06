// tools
import React from "react"
import { withRouter } from "react-router"
import { ModalDispatch } from "../Modal"

// redux & state
import { connect } from "react-redux"
import { fetchPage } from "../../../actions/listActions"
import { setPage as setNextPost } from "../../../actions/postActions"
import { ROUTE_LIST_API, PAGE_ITERATOR_STRING, ROUTE_AUTHENTICATED_LIST_API } from "../../../constants/list"

// components
import { ListDescription, ListHeader } from "../../components/ListDescription"
import { LinkButton } from "../../components/Button"
import { default as ListBlock } from "../../components/List"
import { Section, Article } from "../../components/ArticleStyles"

// helpers
import { getListMeta } from "./helpers"

// return
class List extends React.Component {
	fetchNewList = () => {
		const apiRoute = this.props.private ? ROUTE_AUTHENTICATED_LIST_API : ROUTE_LIST_API
		this.props.fetchPage({
			url: (apiRoute + getListMeta(this.props.history.location.pathname, this.props.list.page.current).search).split(PAGE_ITERATOR_STRING)[0]
		})
	}
	handleLoadMore = event => {
		event.preventDefault()
		this.props.fetchPage({
			url: (this.props.list.requested.url).split(PAGE_ITERATOR_STRING)[0] + PAGE_ITERATOR_STRING + (parseInt(this.props.list.page.current, 0) + 1)
		}, true)
	}
	componentDidMount() {
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
					{
						this.props.header ? this.props.header :
						<ListHeader>
								{
									this.props.list.filters.author ?
										<q><em>
											{ getListMeta(this.props.location.pathname).meta.text }
											{ this.props.list.filters.author.name &&
												<ModalDispatch
													with={{
														request: {
															url: "/api/author/" + this.props.list.filters.author.id
														}
													}}
												>{ this.props.list.filters.author.name }</ModalDispatch> }
										</em>.</q>
									: <q><em>{ getListMeta(this.props.location.pathname).meta.text }</em>.</q>
								}
							&nbsp;{ getListMeta(this.props.location.pathname).meta.emoji }
						</ListHeader>
					}
				</ListDescription>

				<ListBlock
					status={ this.props.list.status }
					items={ this.props.list.items }
					nextPostTitle={ nextPostTitle => this.props.setNextPost({ title: nextPostTitle }) }
					private={ this.props.private }
				/>

				{
					parseInt(this.props.list.page.total, 0) > 1 && parseInt(this.props.list.page.total, 0) > parseInt(this.props.list.page.current, 0) ?
					<LinkButton to="#more" red onClick={ this.handleLoadMore.bind(this) }>Load More</LinkButton> : null
				}

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
    fetchPage: (request, appendItems) => {
			dispatch(fetchPage(request, appendItems))
		},
		setNextPost: (nextPost) => {
			dispatch(setNextPost(nextPost))
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
