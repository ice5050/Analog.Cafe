// tools
import React from "react"

// components
import { Article, Section } from "../ArticleStyles"
import { LinkButton } from "../Button"
import Composer from "../../containers/Composer"


// render
export default props => {
	return (
		<Article>
			<Section endsign><Composer /></Section>
			<LinkButton to="/sign-in" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></LinkButton>
		</Article>
	)
}
