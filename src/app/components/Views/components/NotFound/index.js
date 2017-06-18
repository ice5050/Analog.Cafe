// tools
import React from "react"
import Link from "../../../Link"


// components
import Heading from "../../../ArticleHeading"
import { Section, Article } from "../../../ArticleStyles"

// render
export default props => {
	return(
		<Article>
			<Heading
				pageTitle="😨"
				pageSubtitle="Page not found..."
			/>
			<Section>
				<p style={{textAlign: "center"}}>Click <strong><Link to="/">here</Link></strong> to go to homepage.</p>
			</Section>
		</Article>
	)
}
