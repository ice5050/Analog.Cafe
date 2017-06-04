// tools
import React from "react"

// components
import { ComposerBody, ComposerHead } from "../../../components/Composer"
import { Section, Article } from "../../../components/Article"
import { PageButton } from "../../../components/Buttons"


// render

export const Composer = props => { 
	return(
		<Article>
			<ComposerHead />
			<Section>
				<ComposerBody />
			</Section>
			<PageButton to="/submit/send" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></PageButton>
		</Article>
	)
}