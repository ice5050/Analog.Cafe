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
    <Article>
      <Heading
        pageTitle={
          props.isLoading ? props.pastDelay ? (
            emojis.HUG_RIGHT
          ) : (
            "‌"
          ) : (
            error.VIEW_TEMPLATE.LIST.meta.emoji
          )
        }
        pageSubtitle={
          props.isLoading ? props.pastDelay ? (
            "Loading…"
          ) : (
            "‌"
          ) : (
            error.VIEW_TEMPLATE.LIST.meta.title
          )
        }
      />
      <Section style={{ paddingTop: "100vh" }} />
    </Article>
  )
}
