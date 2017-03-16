// tools
import React from "react"

// components
import { Section, Article } from "../../../components/Page"

// render
export const ListPosts = props => {
	return(
		<Article>
			<Section><p>{ props.route.filter ? props.route.filter : "home" }</p></Section>
		</Article>
	)
}