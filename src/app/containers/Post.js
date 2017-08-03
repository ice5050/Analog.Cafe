// tools
import React from "react"
import { Editor, Raw } from "slate"
import { withRouter } from "react-router"

// redux & state
import { connect } from "react-redux"
import { fetchPage } from "../../actions/postActions"
import { ROUTE_POST_API, ROUTE_ARTICLE_DIR } from "../../constants/post"
import { ROUTE_AUTHOR_API } from "../../constants/author"
import { schema } from "./Composer/containers/ContentEditor/schema"


// components
import Heading from "../components/ArticleHeading"
import { ModalDispatch } from "./Modal"
import { Section, Article, Byline } from "../components/ArticleStyles"


// render
class Post extends React.PureComponent {
	componentWillMount(){
		this.props.fetchPage({
			url: ROUTE_POST_API + (this.props.history.location.pathname).replace(ROUTE_ARTICLE_DIR,"")
		})
	}
	render() {
		return(
			<Article>
				<Heading
					pageTitle={ this.props.post.title }
					pageSubtitle={ this.props.post.subtitle }
				>
					<Byline>by <ModalDispatch
						with={{
							request: {
								url: ROUTE_AUTHOR_API + "/" + this.props.post.author.id
							}
						}}
					>{ this.props.post.author.name }</ModalDispatch></Byline>
				</Heading>
				<Section postStatus={ this.props.post.status } endsign>
					<Editor
						readOnly={					true }
						state={							Raw.deserialize(this.props.post.content.raw, {terse: true}) }
						schema={						schema }
					/>
				</Section>
			</Article>
		)
	}
}


// connet with redux
const mapStateToProps = state => {
	return {
    post: state.post,
	}
}
const mapDispatchToProps = dispatch => {
	return {
    fetchPage: (request) => {
			dispatch(fetchPage(request))
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
