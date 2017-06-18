// tools
import React from "react"
import { SmartLink } from "../../components/SmartLink"


// components
import { Section, Article, Header } from "../../components/Article"

// render
export const NotFound = props => {
	return(
		<Article>
			<Header 
				pageTitle="😨" 
				pageSubtitle="Page not found..."
			/>
			<Section>
				<p style={{textAlign: "center"}}>Click <strong><SmartLink to="/">here</SmartLink></strong> to go to homepage.</p>
			</Section>
		</Article>
	)
}