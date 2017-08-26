// tools
import React from "react"
import ReactGA from "react-ga"
import { withRouter } from "react-router"
import { parse as parseQueryString } from "query-string"

// constants & helpers
import {
  APP_TRACKING_GAID,
  ROUTE_APP_CURRENT_DOMAIN,
  ROUTE_APP_PERMANENT_DOMAIN_NAME
} from "../../../constants/app"
import { rememberMe } from "./helpers"

// redux
import { connect } from "react-redux"
import {
  setView as setNavView,
  setLocation as setNavLocation
} from "../../../actions/navActions"
import { getUser } from "../../../actions/userActions"

import { Modal } from "../Modal"
import Nav from "../Nav"
import AppRoutes from "../../components/_screens/AppRoutes"

// init GA tracking
if (
  process.env.NODE_ENV === "development" ||
  ROUTE_APP_CURRENT_DOMAIN !== ROUTE_APP_PERMANENT_DOMAIN_NAME
)
  window["ga-disable-" + APP_TRACKING_GAID] = true
ReactGA.initialize(APP_TRACKING_GAID, {
  debug: false,
  titleCase: true,
  gaOptions: {}
})
const trackView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
  window.scrollTo(0, 0)
}

// render & route
class App extends React.PureComponent {
  // manipulate nav view & GA tracking
  componentDidMount() {
    console.log(process.env.NODE_ENV)

    // listen to route changes:
    this.handleRouteChnange()
    this.props.history.listen((location, action) => this.handleRouteChnange())

    rememberMe(
      // save user auth token in localStorage:
      this.props.location.search &&
      parseQueryString(this.props.location.search).token
        ? parseQueryString(this.props.location.search).token
        : false,
      // retreive auth user info & credentials & store in Redux
      // if token exists in LS:
      localStorage.getItem("token")
        ? this.props.getUser(localStorage.getItem("token"))
        : null
    )
  }
  handleRouteChnange = () => {
    // Google Analytics
    trackView()

    // configure header/footer views depending on routes and HTTP status
    switch (this.props.history.location.pathname) {
      case "/submit/compose":
      case "/submit/compose/":
        this.props.setNavView("COMPOSER")
        this.props.setNavLocation({ bottom: false })
        break
      case "/me/edit":
      case "/me/edit/":
        this.props.setNavLocation({ top: false, bottom: false })
        break
      case "/submit/confirm-full-consent":
      case "/submit/confirm-full-consent/":
      case "/submit/confirm-basic-consent/":
      case "/submit/confirm-basic-consent":
        this.props.setNavLocation({
          top: false,
          bottom: false
        })
        break
      case "/sign-in":
      case "/sign-in/":
        this.props.setNavView("VISITOR")
        if (
          this.props.history.location.state &&
          this.props.history.location.state.status === "103" // already authenticated
        ) {
          this.props.setNavLocation({
            top: false,
            bottom: false
          })
        } else {
          this.props.setNavLocation({ top: false })
        }
        break
      default:
        if (
          this.props.history.location.state &&
          (this.props.history.location.state.status === "404" ||
            this.props.history.location.state.status === "403")
        ) {
          this.props.setNavView("VISITOR")
          this.props.setNavLocation({
            top: false,
            bottom: false
          })
        } else {
          this.props.setNavView("VISITOR")
          this.props.setNavLocation({})
        }
    }
  }

  render() {
    return (
      <div>
        <Nav top />
        <AppRoutes userStatus={this.props.user.status} />
        <Nav bottom />
        <Modal />
      </div>
    )
  }
}

// connet with redux
const mapDispatchToProps = dispatch => {
  return {
    setNavView: view => {
      dispatch(setNavView(view))
    },
    setNavLocation: location => {
      dispatch(setNavLocation(location))
    },
    getUser: token => {
      dispatch(getUser(token))
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
