// tools
import React from "react"
import { Link } from "react-router"

// components
import { Section, Article, Header } from "../../components/Page"
import { Logo } from "../../components/Logo"

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
				<p>Click below to go to homepage...</p>
				<Link to="/"><Logo flat /></Link>
			</Section>
		</Article>
	)
}