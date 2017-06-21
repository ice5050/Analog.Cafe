// tools
import React from "react"

// components
import { Article, Section } from "../../ArticleStyles"
import Button from "../../Button"


// render
export default props => {
	return(
		<Article>
			{ props.header }
			<Section>{ props.children }</Section>
			<Button to="/log-in" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></Button>
		</Article>
	)
}
