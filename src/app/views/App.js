// tools
import React from "react"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import Helmet from "react-helmet"


// theme
import { TheZine } from "../../themes/TheZine"


// sections
import { Publication } from "./Publication"
import { Submit } from "./Submit"
// pages
import { NotFound } from "./Error"
import { ListPosts } from "./Publication/ListPosts"
import { Introduction } from "./Submit/Introduction"
import { Compose } from "./Submit/Compose"
import { About } from "./About"


// render & route
export const App = props => {
	return (
		<TheZine>
			<Helmet
				defaultTitle="Analog.Cafe ☕️"
				titleTemplate="%s ☕️ Analog.Cafe"
			/>

			<Router history={ browserHistory } >

				<Route path="/"			 					component={ Publication } >
					<IndexRoute 								component={ ListPosts } />
					<Route path="photography"		component={ ListPosts } />
					<Route path="essays"			 	component={ ListPosts } />
					<Route path="about"			 		component={ About } />
				</Route>

				<Route path="submit"					component={ Submit } >
					<IndexRoute 								component={ Introduction } />
					<Route path="compose" 			component={ Compose } />
				</Route>

				<Route path="*"								component={ NotFound } status={404} />

			</Router>
		</TheZine>
	)
}