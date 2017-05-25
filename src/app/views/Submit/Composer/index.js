// tools
import React from "react"

// components
import { ComposerBody, ComposerHead } from "../../../components/Composer"
import { Section, Article } from "../../../components/Article"

// render

export const Composer = props => { 
	return(
		<Article>
			<ComposerHead />
			<Section>
				<ComposerBody />
			</Section>
		</Article>
	)
}