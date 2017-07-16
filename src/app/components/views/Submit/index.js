// tools
import React from "react"
import Helmet from "react-helmet"

// components
import Nav from "../../../containers/Nav"

// render
export const Submit = props => {
	return (
		<Nav>
			<Helmet title="Submit for Review" />
			{ props.children }
		</Nav>
	)
}

export { default as Intro } from "./Intro"
export { default as Composer } from "./Composer"
