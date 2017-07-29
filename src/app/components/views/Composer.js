// tools
import React from "react"

// components
import { Article } from "../ArticleStyles"
import { LinkButton } from "../Button"
import Composer from "../../containers/Composer"


// render
export default props => {
	return (
		<Article>
			<Composer />
			<LinkButton to="/sign-in" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></LinkButton>
		</Article>
	)
}
