// tools
import React from "react"

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
	children: React.PropTypes.element.isRequired,
	pathname: React.PropTypes.string,
}