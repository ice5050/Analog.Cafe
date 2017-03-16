// tools
import React from "react"

// components
import { Nav } from "../../components/Nav"

// render
export class Submit extends React.Component {
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
Submit.propTypes = {
	children: React.PropTypes.element.isRequired,
	pathname: React.PropTypes.string,
}