// tools
import React from "react"
import PropTypes from "prop-types"

// components
import { VisitorNav } from "../../components/NavTypes"

// render
export const Publication = props => {
	return (
		<div>
			<VisitorNav />
			{ props.children }
			<VisitorNav />
		</div>
	)
}

// declare
Publication.propTypes = {
	children: PropTypes.element.isRequired,
}
