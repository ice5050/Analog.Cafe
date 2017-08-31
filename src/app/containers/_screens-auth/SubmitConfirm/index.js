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

// render
const SubmitConfirm = props => {
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
  console.log(keys)
  if (keys.length > 0) {
    localForage.getItems(keys).then(function(results) {
      for (var i = 0; i < keys.length; i++) {
        data.append("images[" + keys[i] + "]", results[keys[i]])
      }
      axios
        .post(ROUTE_SUBMISSION_API, data, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: "JWT " + localStorage.getItem("token")
          }
        })
        .then(response => {
          // clear submissions content and image in storage
          localStorage.removeItem("composer-content-state")
          localStorage.removeItem("composer-header-state")
          localForage.clear()
          props.history.push("/")
        })
        .catch(error => {
          console.log(error)
        })
    })
  }

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
            {submissionConsent === true ? (
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

export default withRouter(SubmitConfirm)
