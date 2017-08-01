// tools
import React from "react"
import { withRouter } from "react-router"

// components
import Link from "../../components/Link"
import Heading from "../../components/ArticleHeading"
import { Article, Section } from "../../components/ArticleStyles"

class NotFound extends React.PureComponent {
	componentWillMount() {
		this.props.history.replace({
			state: {
				status: "403"
			}
		})
	}
  componentWillUnmount() {
    this.props.history.replace({
			state: {
				status: "200"
			}
		})
  }
	render(){
		return(
			<Article>
				<Heading
					pageTitle="😣"
					pageSubtitle="You Need to Sign in First."
				/>
				<Section>
					<p style={{textAlign: "center"}}>Click <strong><Link to="/sign-in">here</Link></strong> to sign in.</p>
				</Section>
			</Article>
		)
	}
}

export default withRouter(NotFound)
