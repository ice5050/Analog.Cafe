// tools
import React from "react"
import { Link } from "react-router"

// components
import { Header, Section, Article } from "../../components/Article"

// render
export const About = props => {
	return(
		<Article>
			<Header 
				pageTitle="Analog.Cafe ☕️" 
				pageSubtitle="Community film photography publication" 
				pageByline="Edited by dmitrizzle"
			/>
			<Section>
				
				<p>About page</p>

				
			</Section>
		</Article>
	)
}