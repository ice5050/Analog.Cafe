// tools
import React from "react"
import toTitleCase from "titlecase"


// styles
import { Header, Title, Subtitle } from "./styles/header"

// return
export const Heading = props => {
	return (
		<Header>
			<Title>{ toTitleCase(props.pageTitle) }</Title>
			{ props.pageSubtitle
				&& <Subtitle>{ 	toTitleCase( props.pageSubtitle )	}</Subtitle>
			}
			{ props.children }
		</Header>
	)
}
export { Header } from "./styles/header"
export { Title } from "./styles/header"
export { Subtitle } from "./styles/header"
export { Byline } from "./styles/header"
export { Article } from "./styles/section"
export { Section } from "./styles/section"
