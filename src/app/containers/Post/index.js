// tools
import React from "react"
import { Editor, Raw } from "slate"
import { withRouter } from "react-router"

// redux & state
import { connect } from "react-redux"
import { fetchPage } from "../../../actions/postActions"
import { ROUTE_POST_API, ROUTE_ARTICLE_DIR } from "./constants"
import { schema } from "../Composer/containers/ContentEditor/schema"


// components
import Heading from "../../components/ArticleHeading"
import { ModalDispatch } from "../Modal"
import { Section, Article, Byline } from "../../components/ArticleStyles"


// render
const Post = props => {
	props.fetchPage({
		url: ROUTE_POST_API + (props.history.location.pathname).replace(ROUTE_ARTICLE_DIR,"")
	})
	return(
		<Article>
			<Heading
				pageTitle={ props.post.title }
				pageSubtitle={ props.post.subtitle }
			>
				<Byline>by <ModalDispatch
					with={{
						request: {
							url: "/api/author/" + props.post.author.id
						}
					}}
				><em style={{ fontVariant: "normal" }}>{ props.post.author.name }</em></ModalDispatch></Byline>
			</Heading>
			<Section postStatus={ props.post.status } endsign>
				<Editor
					readOnly={					true }
					state={							Raw.deserialize(props.post.content.raw, {terse: true}) }
					schema={						schema }
				/>
			</Section>
		</Article>
	)
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
