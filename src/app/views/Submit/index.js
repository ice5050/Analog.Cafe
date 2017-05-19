// tools
import React from "react"
import Helmet from "react-helmet"
import { activeTouch } from "active-touch"


// components
import { Nav } from "../../components/Nav"

// render
export class Submit extends React.Component {
	componentDidUpdate() {
	 		activeTouch.init({ cssclass: "downstate" })
  }
	render(){
		return (
			<div onMouseUp={ activeTouch.reset() }>
				<Helmet title="Submit to Editor" />
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