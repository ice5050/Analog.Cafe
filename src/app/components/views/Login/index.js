// tools
import React from "react"

// components
import LoginWithEmail from "../../../containers/forms/LoginWithEmail"
import Heading from "../../ArticleHeading"
import { Article, Section } from "../../ArticleStyles"
import { VisitorNav } from "../../NavTypes"


// styles
import { ButtonGroup } from "../../Button"
import { TwitterButton } from "./styles"

// render
export default props => {
	return(
		<div>
			<Article>
				<Heading pageTitle="Log In" />
				<Section>

					<ButtonGroup>
						<TwitterButton to="/submit/send">Log In with Twitter</TwitterButton>
						<p><em>- or -</em></p>
						<LoginWithEmail />
					</ButtonGroup>

				</Section>
			</Article>
			<VisitorNav />
		</div>
	)
}
