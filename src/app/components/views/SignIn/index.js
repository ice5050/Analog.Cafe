// tools
import React from "react"

// components
import Nav from "../../../containers/Nav"
import SignInWithEmail from "../../../containers/forms/SignInWithEmail"
import Heading from "../../ArticleHeading"
import { Article, Section } from "../../ArticleStyles"


// styles
import { ButtonGroup } from "../../Button"
import { TwitterButton } from "./styles"

// render
export default props => {
	return(
		<Nav>
			<Article>
				<Heading pageTitle="Sign In" />
				<Section>

					<ButtonGroup>
						<TwitterButton to="/submit/send">Sign In with Twitter</TwitterButton>
						<p><em>- or -</em></p>
						<SignInWithEmail />
					</ButtonGroup>

				</Section>
			</Article>
		</Nav>
	)
}
