// tools
import React from "react"
import Link from "../../components/Link"


// components
import Heading from "../../components/ArticleHeading"
import { Section, Article } from "../../components/ArticleStyles"

// render
export const NotFound = props => {
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
