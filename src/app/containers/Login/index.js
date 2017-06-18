// tools
import React from "react"
import { browserHistory } from "react-router"

// components
import { PageButton } from "../../components/Button"


// components
import { Section, Article, Header } from "../../components/Article"

// render
export const Login = props => {
	return(
		<Article>
			<Header pageTitle="Log In" />
			<Section>
				<PageButton to="/">Login with Twitter</PageButton>
				<p style={{textAlign: "center"}}><em>- or -</em></p>
				<PageButton to="/">Login with Facebook</PageButton>
				<p style={{textAlign: "center"}}><em>- or -</em></p>
				<h3>Login with Email</h3>
				
				<PageButton to="/" onClick={ browserHistory.goBack }>Cancel</PageButton>
			</Section>
		</Article>
	)
}