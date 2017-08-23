// tools
import React from "react"

// components
import Heading from "../../components/ArticleHeading"
import { Article, Section } from "../../components/ArticleStyles"

// render
export default props => {
  return (
    <Article>
      <Heading
        pageTitle="Sending Your Submission"
        pageSubtitle="You have indicated [permissions]"
      />
      <Section>
        <p>Please wait...</p>
      </Section>
    </Article>
  )
}
