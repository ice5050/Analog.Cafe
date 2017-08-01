// tools
import React from "react"
import { withRouter } from "react-router"
import Link from "../../components/Link"


// components
import Heading from "../../components/ArticleHeading"
import { Section, Article } from "../../components/ArticleStyles"

// render
class NotFound extends React.PureComponent {
	componentWillMount() {
		this.props.history.replace({
			state: {
				status: "404"
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
	render() {
		return(
			<Article>
				<Heading
					pageTitle="😨"
					pageSubtitle="Page Not Found&hellip;"
				/>
				<Section>
					<p style={{textAlign: "center"}}>Click <strong><Link to="/">here</Link></strong> to go to homepage.</p>
				</Section>
			</Article>
		)
	}
}
export default withRouter(NotFound)
