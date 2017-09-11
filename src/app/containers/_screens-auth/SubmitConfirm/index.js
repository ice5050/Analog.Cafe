// tools
import React from "react"
import Helmet from "react-helmet"

import { withRouter } from "react-router"
import { connect } from "react-redux"

import axios from "axios"
import localForage from "localforage"
import "localforage-getitems"

// components
import Heading from "../../../components/ArticleHeading"
import { Article, Section } from "../../../components/ArticleStyles"
import { loadContent, loadHeader } from "../../Composer/helpers/loader"

// constants
import { WEBSOCKET_UPLOAD_PROGRESS } from "../../../../constants/submission"
import {
  ROUTE_SUBMISSION_API,
  ROUTE_REDIRECT_AFTER_SUBMIT
} from "../../../../constants/submission"
import { ROUTE_AUTH_USER_LANDING } from "../../../../constants/user"
import emojis from "../../../../constants/emoji"

// redux actions
import {
  setRoutes as setLoginRedirectRoutes,
  resetRoutes as resetLoginRedirectRoutes
} from "../../../../actions/userActions"
import { setCard } from "../../../../actions/modalActions"

// this function kicks user to sign-in scdreen but rembers where to come back to
const redirectToSignIn = props => {
  props.setLoginRedirectRoutes({ success: props.history.location.pathname })
  props.history.replace({
    pathname: "/sign-in"
  })
}

function sendSubmission(data, props, socket) {
  var config = {
    onUploadProgress: function(progressEvent) {
      var percentCompleted = Math.round(
        progressEvent.loaded * 100 / progressEvent.total
      )
      console.log("Upload image to server: " + percentCompleted)
    },
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "JWT " + localStorage.getItem("token")
    }
  }

  axios
    .post(ROUTE_SUBMISSION_API, data, config)
    .then(response => {
      // clear submissions content and image in storage
      localStorage.removeItem("composer-content-state")
      localStorage.removeItem("composer-header-state")
      localForage.clear()
      socket.close()
      props.history.replace({
        pathname: ROUTE_REDIRECT_AFTER_SUBMIT
      })
    })
    .catch(error => {
      socket.close()
      if (error.response && error.response.status === 401) {
        redirectToSignIn(props)
      } else {
        // TODO display error and retry
        console.log(error)
        props.setCard(
          {
            status: "ok",
            info: {
              title: "Error",
              text: "Oops! Something went wrong.",
              image: "/images/banners/image-suggestions-action.jpg",
              buttons: [
                {
                  to: "#",
                  onClick: () => {
                    window.location.reload()
                  },
                  text: "Retry",
                  red: true
                },
                {
                  to: ROUTE_AUTH_USER_LANDING,
                  text: "Abort"
                }
              ]
            }
          },
          { url: "errors/list" }
        )
      }
    })
}

// render
class SubmitConfirm extends React.Component {
  componentDidMount() {
    var props = this.props
    if (!localStorage.getItem("token")) {
      redirectToSignIn(this.props)
    } else {
      var socket = new WebSocket(WEBSOCKET_UPLOAD_PROGRESS)
      // Listen for messages
      socket.addEventListener("message", function(event) {
        console.log("Upload image form server to cloundinary: " + event.data)
      })

      const submissionConsent = props.history.location.pathname.includes(
        "full-consent"
      )

      var content = loadContent()
      var header = loadHeader()
      var keys = []

      if (content && content.document && content.document.nodes) {
        for (var i = 0; i < content.document.nodes.length; i++) {
          var node = content.document.nodes[i]
          if (node && node.data && node.data.key) {
            keys.push(node.data.key)
          }
        }

        var data = new FormData()
        data.append("content", JSON.stringify(content))
        data.append("header", JSON.stringify(header))
        data.append("isFullConsent", submissionConsent)

        if (keys.length > 0) {
          localForage.getItems(keys).then(function(results) {
            for (var i = 0; i < keys.length; i++) {
              data.append("images[" + keys[i] + "]", results[keys[i]])
            }
            sendSubmission(data, props, socket)
          })
        } else {
          sendSubmission(data, props, socket)
        }
      } else {
        // content deleted
        props.history.replace({
          pathname: ROUTE_REDIRECT_AFTER_SUBMIT
        })
      }
    }
  }

  render = () => {
    return (
      <Article>
        <Helmet>
          <title>Uploading Submissoin…</title>
        </Helmet>
        <Heading pageTitle={emojis.NEONCAT} pageSubtitle="Sending…" />
        <Section>
          <p>
            You have requested
            <em>
              {this.props.history.location.pathname.includes("full-consent") ===
              true ? (
                " more exposure. "
              ) : (
                " no additional exposure. "
              )}
            </em>
            Please wait while we process your submission&hellip;
          </p>
        </Section>
      </Article>
    )
  }
}

// connet with redux
const mapStateToProps = state => {
  return {
    modal: state.modal,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCard: (info, request) => {
      dispatch(setCard(info, request))
    },

    setLoginRedirectRoutes: routes => {
      dispatch(setLoginRedirectRoutes(routes))
    },
    resetLoginRedirectRoutes: () => {
      dispatch(resetLoginRedirectRoutes())
    }
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubmitConfirm)
)
