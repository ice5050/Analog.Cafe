// tools
import React from "react"
import PropTypes from "prop-types"

// components
import { Nav } from "../../components/Nav"

// render
export class Publication extends React.Component {
	render(){
		return (
			<div>
				<Nav />
				{ this.props.children }
			</div>
		)
	}
}

// declare
Publication.propTypes = {
	children: PropTypes.element.isRequired,
	pathname: PropTypes.string,
}