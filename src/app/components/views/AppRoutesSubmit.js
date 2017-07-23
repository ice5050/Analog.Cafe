// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import { Submit, Composer } from "./"

// render
export default props => {
	return (
		<Switch>
			<Route exact path="/submit" component={ Submit } />
			<Route exact path="/submit/compose" component={ Composer } />
		</Switch>
	)
}
