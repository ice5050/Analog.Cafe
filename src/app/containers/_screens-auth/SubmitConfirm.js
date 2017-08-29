// tools
import React from "react"
import { withRouter } from "react-router"

// components
import Heading from "../../components/ArticleHeading"
import { Article, Section } from "../../components/ArticleStyles"

// render
const SubmitConfirm = props => {
  const submissionConsent = props.history.location.pathname.includes(
    "full-consent"
  )
  return (
    <Article>
      <Heading pageTitle="Sending… 🚀" />
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
