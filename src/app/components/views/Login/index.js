// tools
import React from "react"

// components
import LoginWithEmail from "../../../containers/forms/LoginWithEmail"
import Heading from "../../ArticleHeading"
import { Article, Section } from "../../ArticleStyles"
import { VisitorNav } from "../../NavTypes"


// styles
import { TwitterButton, SubWindow } from "./styles"

// render
export default props => {
	return(
		<div>
			<Article>
				<Heading pageTitle="Log In" />
				<Section>

					<SubWindow>
						<TwitterButton to="/submit/send">Log In with Twitter</TwitterButton>
						<p style={{ textAlign: "center" }}><em>- or -</em></p>
						<LoginWithEmail />
					</SubWindow>

				</Section>
			</Article>
			<VisitorNav />
		</div>
	)
}
