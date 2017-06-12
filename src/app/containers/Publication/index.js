// tools
import React from "react"
import PropTypes from "prop-types"

// components
import { Nav } from "../../components/Nav"

// render
export const Publication = props => {
	return (
		<div>
			<Nav />
			{ props.children }
			<Nav />
		</div>
	)
}

// declare
Publication.propTypes = {
	children: PropTypes.element.isRequired,
}