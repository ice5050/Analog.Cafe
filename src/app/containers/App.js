// tools
import React from "react"
import ReactGA from "react-ga"

// redux
import { connect } from "react-redux"
import { setView as setNavView, setLocation as setNavLocation } from "../../actions/navActions"

import { Modal } from "./Modal"
import Nav from "./Nav"
import AppRoutes from "../components/views/AppRoutes"

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
				<AppRoutes />
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
export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App)
