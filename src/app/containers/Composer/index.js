// tools
import React from "react"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"
import { Section } from "../../components/ArticleStyles"


// placeholders
const titlePlaceholder = {
	title: "Title",
	subtitle: "Subtitle (Optional)",
}

// return
// this is a pure function, but I left it in /containers folder
// because it gathers all sub-containers conveniently for export
export default props => {
	return(
		<div>
			<HeaderEditor
				pageTitle={ titlePlaceholder.title }
				pageSubtitle={ titlePlaceholder.subtitle }
			/>
			<Section endsign>
				<ContentEditor
					ref={ input => { this.contentEditor = input } }
				/>
			</Section>
		</div>
	)
}
