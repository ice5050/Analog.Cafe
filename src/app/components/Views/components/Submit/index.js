// tools
import React from "react"
import Helmet from "react-helmet"


// components
import { VisitorNav, ComposerNav } from "../../../NavTypes"

// render
export const Submit = props => {
	return (
		<div>
			<Helmet title="Submit for Review" />
			{ props.location.pathname.includes("submit/compose") ? 	<ComposerNav /> : <VisitorNav /> }
			{ props.children }
			{ props.location.pathname.includes("submit/compose") ? 	null : <VisitorNav /> }
		</div>
	)
}

export { default as Intro } from "./components/Intro"
export { default as Composer } from "./components/Composer"
