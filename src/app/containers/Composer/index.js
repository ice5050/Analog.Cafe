// tools
import React from "react"

// components
import { Section } from "../../components/ArticleStyles"
import { ComposerWrap } from "../../components/Views/components/Submit"
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
export default props => {
	return(
		<ComposerWrap>
			<HeaderEditor
				author={ authorPlaceholder }
				pageTitle={ titlePlaceholder.title }
				pageSubtitle={ titlePlaceholder.subtitle }
			/>
			<Section>
				<ContentEditor author={ authorPlaceholder } />
			</Section>
		</ComposerWrap>
	)
}
