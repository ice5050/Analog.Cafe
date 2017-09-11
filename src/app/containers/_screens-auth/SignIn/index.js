// tools
import React from "react"
import Helmet from "react-helmet"

// redux
import { connect } from "react-redux"

// components
import SignInWithEmail from "../../_forms/SigninWithEmail"
import Heading from "../../../components/ArticleHeading"
import { Article, Section } from "../../../components/ArticleStyles"
import AlreadyAuthenticated from "../../_screens-errors/AlreadyAuthenticated"

// styles
import { ButtonGroup } from "../../../components/Button"
import { TwitterButton } from "./styles"

// constants & helpers
import { rememberMe } from "./helpers"
import { ROUTE_LOGIN_TWITTER_API } from "../../../../constants/login"
import { WEBSOCKET_AUTHEN_TOKEN } from "../../../../constants/app"

var socket = new WebSocket(WEBSOCKET_AUTHEN_TOKEN)
var redirect_to = null
var props = null

// Listen for messages
socket.addEventListener("message", function(event) {
  rememberMe(event.data)
  if (redirect_to && props) {
    props.history.push(redirect_to)
  }
})

function clickTwitterButton() {
  window.open(ROUTE_LOGIN_TWITTER_API, "_blank", "height=600,width=500")
}

// render
class SignIn extends React.Component {
  componentWillMount() {
    if (this.props.location && this.props.location.state) {
      redirect_to = this.props.location.state.redirect_to
    }
    props = this.props
  }

  render() {
    if (this.props.user.status !== "ok") {
      return (
        <Article>
          <Helmet>
            <title>Sign In</title>
          </Helmet>

          <Heading pageTitle="Sign In" />
          <Section>
            <ButtonGroup>
              <TwitterButton onClick={clickTwitterButton}>
                Sign in With Twitter
              </TwitterButton>
              <p>
                <em>- or -</em>
              </p>
              <SignInWithEmail />
            </ButtonGroup>
          </Section>
        </Article>
      )
    } else {
      return <AlreadyAuthenticated />
    }
  }
}

// connet with redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SignIn)
