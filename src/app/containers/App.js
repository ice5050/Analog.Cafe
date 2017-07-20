// tools
import React from "react"
import ReactGA from "react-ga"



// redux
import { connect } from "react-redux"
import { setView as setNavView, setLocation as setNavLocation } from "../../actions/navActions"


// views and components
// import { About, NotFound, SignIn, Publication } from "../components/views"
// import { Intro, Submit } from "../components/views/Submit"
// import Composer from "./Composer"
// import List from "./List"
// import Post from "./Post"
import { Modal } from "./Modal"
import Nav from "./Nav"
import Main from "./Main"

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
			<Nav>
				<Main />
				<Modal />
			</Nav>
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



//
// {/* onUpdate={ this.handleRouterUpdate.bind(this) } */}
// 	<Switch>

// 			<Route exact path="about"			 		component={ About } />
// 			<Route exact path="zine/*"				component={ Post } />
// 		</Route> */}
// 		<Route exact path="/submit"					component={ Submit } />
// 			{/* <Route 											component={ Intro } />
// 			<Route exact path="compose" 			component={ Composer } />
// 		</Route> */}
// 		<Route exact path="/sign-in"					component={ SignIn } />
// 		<Route exact path="/"			 					component={ Publication } />
//
// 		{/* <Route exact path="*"								component={ NotFound } status={404} /> */}
// 	</Switch>
