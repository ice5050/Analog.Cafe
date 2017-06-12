// tools
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"


// components
import { Nav } from "../../components/Nav"
import { ComposerNav } from "../../components/Nav/components/Composer"

// render
export const Submit = props => {
	return (
		<div>
			<Helmet title="Submit for Review" />
			{ props.location.pathname.includes("submit/compose") ? 	<ComposerNav /> : <Nav /> }
			{ props.children }
			{ props.location.pathname.includes("submit/compose") ? 	null : <Nav /> }
		</div>
	)
}

// declare
Submit.propTypes = {
	children: PropTypes.element.isRequired,
	pathname: PropTypes.string,
}