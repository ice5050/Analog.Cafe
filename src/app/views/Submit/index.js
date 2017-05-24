// tools
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"


// components
import { Nav } from "../../components/Nav"

// render
export class Submit extends React.Component {
	render(){
		return (
			<div>
				<Helmet title="Submit for Review" />
				<Nav />
				{ this.props.children }
			</div>
		)
	}
}

// declare
Submit.propTypes = {
	children: PropTypes.element.isRequired,
	pathname: PropTypes.string,
}
