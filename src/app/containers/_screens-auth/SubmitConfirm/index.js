// tools
import React from "react"
import Helmet from "react-helmet"
import { withRouter } from "react-router"
import emojis from "../../../../constants/emoji"

// components
import Heading from "../../../components/ArticleHeading"
import { Article, Section } from "../../../components/ArticleStyles"

// render
const SubmitConfirm = props => {
  const submissionConsent = props.history.location.pathname.includes(
    "full-consent"
  )
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
            {submissionConsent === true
              ? " more exposure. "
              : " no additional exposure. "}
          </em>
          Please wait while we process your submission&hellip;
        </p>
      </Section>
    </Article>
  )
}

export default withRouter(SubmitConfirm)
