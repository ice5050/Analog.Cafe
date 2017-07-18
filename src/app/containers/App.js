// tools
import React from "react"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import Helmet from "react-helmet"
import ReactGA from "react-ga"

// theme
import Paper from "../../themes/Paper"

// redux
import { connect } from "react-redux"
import { setView as setNavView, setLocation as setNavLocation } from "../../actions/navActions"


// views and components
import { About, NotFound, SignIn, Publication } from "../components/views"
import { Intro, Submit } from "../components/views/Submit"
import Composer from "./Composer"
import List from "./List"
import Post from "./Post"
import { Modal } from "./Modal"

// init GA tracking
ReactGA.initialize("UA-91374353-3")
const trackView = () => {
	ReactGA.set({ page: window.location.pathname + window.location.search })
	ReactGA.pageview(window.location.pathname + window.location.search)
	window.scrollTo(0,0)
}

// render & route
class App extends React.Component {

	// manipulate nav view & GA tracking
	handleRouterUpdate = () => {
		trackView()
		switch (window.location.pathname) {
			case "/submit/compose":
			case "/submit/compose/":
				this.props.setNavView("COMPOSER")
				this.props.setNavLocation({ "bottom": false })
				break
			case "/sign-in":
			case "/sign-in/":
				this.props.setNavView("VISITOR")
				this.props.setNavLocation({ "top": false })
				break
			default:
				this.props.setNavView("VISITOR")
				this.props.setNavLocation({})
		}
	}

	render(){
		return (
			<Paper>

				{/* helmet */}
				<Helmet
					defaultTitle="Analog.Cafe ☕️"
					titleTemplate="%s ☕️ Analog.Cafe"
				/>

				{/* routes */}
				<Router history={ browserHistory } onUpdate={ this.handleRouterUpdate.bind(this) }>
					<Route path="/"			 					component={ Publication } >
						<IndexRoute 								component={ List } />
						<Route path="photo-essays"	component={ List } />
						<Route path="articles"			component={ List } />
						<Route path="about"			 		component={ About } />
						<Route path="zine/*"				component={ Post } />
						<Route path="author/*"			component={ List } />
					</Route>
					<Route path="submit"					component={ Submit } >
						<IndexRoute 								component={ Intro } />
						<Route path="compose" 			component={ Composer } />
					</Route>
					<Route path="sign-in"					component={ SignIn } />
					<Route path="*"								component={ NotFound } status={404} />
				</Router>

				{/* modal card */}
				<Modal />
				
			</Paper>
		)
	}
}


// connet with redux
const mapStateToProps = state => {
	return {
		// view: state.nav.view,
		// navLocation: state.nav.location,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		setNavView: view => {
			dispatch(setNavView(view))
		},
		setNavLocation: location => {
			dispatch(setNavLocation(location))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
