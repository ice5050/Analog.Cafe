// tools
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"


// components
import { VisitorNav, ComposerNav } from "../../components/NavTypes"

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

// declare
Submit.propTypes = {
	children: PropTypes.element.isRequired,
	pathname: PropTypes.string,
}
