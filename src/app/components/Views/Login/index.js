// tools
import React from "react"

// components
import Heading from "../../ArticleHeading"
import Button from "../../Button"
import { Article, Section } from "../../ArticleStyles"
import { SubtitleInput } from "../../InputText"
import { VisitorNav } from "../../NavTypes"


// styles
import { TwitterButton, InputButtonPair, SubWindow } from "./styles"

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

						<InputButtonPair>
							<SubtitleInput placeholder="Type Your Email" required />
							<Button to="/submit/send" red>Log In</Button>
						</InputButtonPair>
					</SubWindow>

				</Section>
			</Article>
			<VisitorNav />
		</div>
	)
}
