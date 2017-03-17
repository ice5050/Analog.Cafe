// tools
import React from "react"
import { render } from "react-dom"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import Helmet from "react-helmet"


// theme
import { TheZine } from "./themes/TheZine"


// sections
import { Publication } from "./app/views/Publication"
import { Submit } from "./app/views/Submit"
// pages
import { NotFound } from "./app/views/Error"
import { ListPosts } from "./app/views/Publication/ListPosts"
import { Login } from "./app/views/Submit/Login"


// render & route
class App extends React.Component {
	render() {
		return (
			<TheZine>
				
				<Helmet
					defaultTitle="Analog.Cafe ☕️"
					titleTemplate="%s ☕️ Analog.Cafe"
				/>
				
				<Router history={ browserHistory } >
					
					<Route path="/"			 					component={ Publication } >
						<IndexRoute 								component={ ListPosts } />
						<Route path="articles" 			component={ ListPosts } filter={ "articles" } />
						<Route path="photo-essays" 	component={ ListPosts } filter={ "photoEssays" } />
						<Route path="favorites" 		component={ ListPosts } filter={ "favorites" } />
					</Route>
				
					<Route path="submit"					component={ Submit } >
						<IndexRoute 								component={ Login } />
					</Route>
				
					<Route path="*"								component={ NotFound } status={404} />
				
				</Router>
			</TheZine>
		)
	}
}
render(<App/>, document.getElementById("app"))