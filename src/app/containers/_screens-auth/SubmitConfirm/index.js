// tools
import React from "react"
import Helmet from "react-helmet"
import { withRouter } from "react-router"
import emojis from "../../../../constants/emoji"
import axios from "axios"
import localForage from "localforage"
import "localforage-getitems"

// components
import Heading from "../../../components/ArticleHeading"
import { Article, Section } from "../../../components/ArticleStyles"
import { loadContent, loadHeader } from "../Composer/helpers/loader"

import { ROUTE_SUBMISSION_API } from "../../../constants/submission"

function redirectToSignIn(props) {
  props.history.push({
    pathname: "/sign-in",
    state: { redirect_to: props.history.location.pathname }
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
      props.history.push("/me")
    })
    .catch(error => {
      socket.close()
      if (error.response && error.response.status === 401) {
        redirectToSignIn(this.props)
      } else {
        // TODO display error and retry
        console.log(error)
      }
    })
}

// render
class SubmitConfirm extends React.Component {
  componentDidMount() {
    var props = this.props
    if (!localStorage.getItem("token")) {
      redirectToSignIn(props)
    } else {
      var socket = new WebSocket("ws://localhost:4001/api/submissions")
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
    }
  }

  render() {
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

export default withRouter(SubmitConfirm)
