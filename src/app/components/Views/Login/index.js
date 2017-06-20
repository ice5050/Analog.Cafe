// tools
import React from "react"

// components
import Heading from "../../ArticleHeading"
import Button from "../../Button"
import { Article, Section } from "../../ArticleStyles"


// styles
import { TwitterButton } from "./styles"


// render
export default props => {
	return(
		<Article>
			<Heading pageTitle="Log In" />
			<Section>

				<TwitterButton to="/">Login with Twitter</TwitterButton>

				<p style={{textAlign: "center"}}><em>- or -</em></p>

				<h3 style={{textAlign: "center", padding: 0}}>type@your.email</h3>
				<Button to="/" red>Login with Email</Button>

				<p style={{textAlign: "center"}}><em>- or -</em></p>
				<Button to="/">Cancel</Button>
			</Section>
		</Article>
	)
}
