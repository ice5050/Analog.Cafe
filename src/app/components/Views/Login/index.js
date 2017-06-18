// tools
import React from "react"

// components
import Heading from "../../ArticleHeading"
import Button from "../../Button"
import { Article, Section } from "../../ArticleStyles"


// styles
import { TwitterButton, FacebookButton } from "./styles"


// render
export default props => {
	return(
		<Article>
			<Heading pageTitle="Log In" />
			<Section>

				<TwitterButton to="/">Login with Twitter</TwitterButton>

				<p style={{textAlign: "center"}}><em>- or -</em></p>

				<FacebookButton to="/">Login with Facebook</FacebookButton>

				<p style={{textAlign: "center"}}><em>- or -</em></p>
				<h3>Login with Email</h3>

				<Button to="/">Cancel</Button>
			</Section>
		</Article>
	)
}
