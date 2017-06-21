// tools
import React from "react"

// components
import { VisitorNav } from "../../NavTypes"

// render
export default props => {
	return (
		<div>
			<VisitorNav />
			{ props.children }
			<VisitorNav />
		</div>
	)
}
