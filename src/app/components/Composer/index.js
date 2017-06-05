// tools
import React from "react"

// components
import { Section, Article } from "../Article"
import { HeaderEditor } from "./components/HeaderEditor"
import { ContentEditor } from "./components/ContentEditor"
import { PageButton } from "../Buttons"


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