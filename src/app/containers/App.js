// tools
import React from "react"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import Helmet from "react-helmet"
import ReactGA from "react-ga"

// theme
import Paper from "../themes/Paper"


// sections
import { Publication } from "./Publication"
import { Submit } from "./Submit"

// pages
import { About, NotFound, Login } from "../components/Views"


import { Introduction } from "./Submit/Introduction"
import { Composer } from "./Submit/Composer"
import { ListPosts } from "./Publication/List"
import { Post } from "./Publication/Post"



// init GA tracking
ReactGA.initialize("UA-91374353-3")

// render & route
export const App = props => {
	const updateView = () => {
		ReactGA.set({ page: window.location.pathname + window.location.search })
		ReactGA.pageview(window.location.pathname + window.location.search)

		window.scrollTo(0,0)
	}
	return (
		<Paper>
			<Helmet
				defaultTitle="Analog.Cafe ☕️"
				titleTemplate="%s ☕️ Analog.Cafe"
			/>

			<Router history={ browserHistory } onUpdate={ updateView } >

				<Route path="/"			 					component={ Publication } >
					<IndexRoute 								component={ ListPosts } />
					<Route path="photo-essays"	component={ ListPosts } />
					<Route path="articles"			component={ ListPosts } />
					<Route path="about"			 		component={ About } />

					<Route path="zine/*"				component={ Post } />
					<Route path="author/*"			component={ ListPosts } />
				</Route>

				<Route path="submit"					component={ Submit } >
					<IndexRoute 								component={ Introduction } />
					<Route path="compose" 			component={ Composer } />
				</Route>

				<Route path="login"						component={ Login } />
				<Route path="*"								component={ NotFound } status={404} />

			</Router>

		</Paper>
	)
}
