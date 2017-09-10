// tools
import React from "react"

// styles
import { ListDescription, ListHeader } from "../ListDescription"
import { Section, Article } from "../ArticleStyles"
import emojis from "../../../constants/emoji"
import error from "../../../constants/error-messages"

// return
export default props => {
  return (
    <div>
      <ListDescription>
        <ListHeader>
          <q>
            <em>
              {props.isLoading ? (
                "Loading…"
              ) : (
                error.VIEW_TEMPLATE.LIST.meta.title
              )}
            </em>
          </q>{" "}
          {props.isLoading ? (
            emojis.HUG_RIGHT
          ) : (
            error.VIEW_TEMPLATE.LIST.meta.emoji
          )}
        </ListHeader>
      </ListDescription>
      <Article style={{ paddingTop: "100vh" }}>
        <Section />
      </Article>
    </div>
  )
}
