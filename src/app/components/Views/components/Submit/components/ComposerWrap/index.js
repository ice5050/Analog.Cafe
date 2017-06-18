// tools
import React from "react"

// components
import { Article } from "../../../../../ArticleStyles"
import Button from "../../../../../Button"


// render
export default props => {
	return(
		<Article>
			{ props.children }
			<Button to="/submit/send" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></Button>
		</Article>
	)
}
