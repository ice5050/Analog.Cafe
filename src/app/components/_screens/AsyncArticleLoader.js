// tools
import React from "react"

// styles
import Heading from "../ArticleHeading"
import { Section, Article } from "../ArticleStyles"
import emojis from "../../../constants/emoji"
import error from "../../../constants/error-messages"

// return
export default props => {
  return (
    <Article style={{ paddingTop: "100vh" }}>
      <Heading
        pageTitle={
          props.isLoading ? (
            emojis.HUG_RIGHT
          ) : (
            error.VIEW_TEMPLATE.LIST.meta.emoji
          )
        }
        pageSubtitle={
          props.isLoading ? "Loading…" : error.VIEW_TEMPLATE.LIST.meta.title
        }
      />
      <Section />
    </Article>
  )
}
