// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Intro from "./Intro"
import Composer from "./Composer"

// render
export const Submit = props => {
	return (
		<Switch>
			<Route exact path="/submit" component={ Intro } />
			<Route exact path="/submit/compose" component={ Composer } />
		</Switch>
	)
}
