// tools
import React from "react"

// components
import Nav from "../../../containers/Nav"

// render
export default props => {
	return (
		<Nav>
			{ props.children }
		</Nav>
	)
}
