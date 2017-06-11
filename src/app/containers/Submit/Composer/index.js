// tools
import React from "react"

// components
import { Section, Article } from "../../../components/Article"
import { PageButton } from "../../../components/Buttons"
import { HeaderEditor } from "./components/HeaderEditor"
import { ContentEditor } from "./components/ContentEditor"


// render
export const Composer = props => {
	return(
		<Article>
			<HeaderEditor  />
			<Section>
				<ContentEditor />
			</Section>
			<PageButton to="/submit/send" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></PageButton>
		</Article>
	)
}