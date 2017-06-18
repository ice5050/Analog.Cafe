// tools
import React from "react"

// components
import { Article, Heading, Section } from "../../components/ArticleStyles"
import { PageButton } from "../../components/Button"


// styles
import { TwitterButton, FacebookButton } from "./styles"


// render
export const Login = props => {
	return(
		<Article>
			<Heading pageTitle="Log In" />
			<Section>

				<TwitterButton to="/">Login with Twitter</TwitterButton>

				<p style={{textAlign: "center"}}><em>- or -</em></p>

				<FacebookButton to="/">Login with Facebook</FacebookButton>

				<p style={{textAlign: "center"}}><em>- or -</em></p>
				<h3>Login with Email</h3>

				<PageButton to="/">Cancel</PageButton>
			</Section>
		</Article>
	)
}
