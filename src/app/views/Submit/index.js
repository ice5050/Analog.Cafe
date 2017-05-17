// tools
import React from "react"
import Helmet from "react-helmet"

// components
import { Nav } from "../../components/Nav"

// render
export class Submit extends React.Component {
	render(){
		return (
			<div>
				<Helmet title="Submit" />
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