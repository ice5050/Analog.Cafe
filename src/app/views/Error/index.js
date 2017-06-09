// tools
import React from "react"
import { Link } from "react-router"


// components
import { Section, Article, Header } from "../../components/Article"
import { NavLogo } from "../../components/Nav/components/NavLogo"

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
				<p style={{textAlign: "center"}}>Click <Link to="/">here</Link> to go to homepage.</p>
			</Section>
		</Article>
	)
}