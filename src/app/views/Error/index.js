// tools
import React from "react"
import { Link } from "react-router"


// components
import { Section, Article, Header } from "../../components/Article"

// render
export const NotFound = props => {
	return(
		<Article>
			<Header 
				pageTitle="😨" 
				pageSubtitle="Page not found..." 
				pageByline="Sorry about that." 
			/>
			<Section>
				<p style={{textAlign: "center"}}>Click <strong><Link to="/">here</Link></strong> to go to homepage.</p>
			</Section>
		</Article>
	)
}