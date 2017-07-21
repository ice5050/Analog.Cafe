// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Submit from "./Submit"
import Composer from "./Composer"

// render
export default props => {
	return (
		<Switch>
			<Route exact path="/submit" component={ Submit } />
			<Route exact path="/submit/compose" component={ Composer } />
		</Switch>
	)
}
