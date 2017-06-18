// tools
import React from "react"

// components
import { Section, Article } from "../../../components/ArticleStyles"
import Button from "../../../components/Button"
import { HeaderEditor } from "./components/HeaderEditor"
import { ContentEditor } from "./components/ContentEditor"


// placeholders
const authorPlaceholder = {
	name: "Your Name",
	id:		"sample",
}
const titlePlaceholder = {
	title: "Write Your Title Here",
	subtitle: "Subtitle (Optional)",
}

// render
export const Composer = props => {
	return(
		<Article>
			<HeaderEditor
				author={ authorPlaceholder }
				pageTitle={ titlePlaceholder.title }
				pageSubtitle={ titlePlaceholder.subtitle }
			/>
			<Section>
				<ContentEditor author={ authorPlaceholder } />
			</Section>
			<Button to="/submit/send" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></Button>
		</Article>
	)
}
