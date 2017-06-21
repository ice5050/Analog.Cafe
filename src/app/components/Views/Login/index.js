// tools
import React from "react"
import { browserHistory } from "react-router"

// components
import Heading from "../../ArticleHeading"
import Button from "../../Button"
import { Article, Section } from "../../ArticleStyles"
import { SubtitleInput } from "../../InputText"


// styles
import { TwitterButton } from "./styles"


// render
export default props => {
	return(
		<Article>
			<Heading pageTitle="Log In" />
			<Section>

				<TwitterButton to="/submit/send">Login with Twitter</TwitterButton>

				<p style={{ textAlign: "center" }}><em>- or -</em></p>

				<SubtitleInput
					style={{ textAlign: "center", padding: 0 }}
					placeholder="type@your.email"
				></SubtitleInput>
				<Button to="/submit/send" red>Login with Email</Button>

				<p style={{ textAlign: "center" }}><em>- or -</em></p>
				<Button to="/submit">Cancel</Button>
			</Section>
		</Article>
	)
}
