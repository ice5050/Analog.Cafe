// tools
import React from "react"

// styles
import { CardFlattened } from "../../styles"
import { LinkButton } from "../../../Button"
import {
  TwitterButton,
  FacebookButton
} from "../../../Button/components/SocialButtons"

import { ROUTE_ARTICLE_DIR } from "../../../../../constants/article"

// return
export default props => {
  return (
    <CardFlattened>
      <FacebookButton onClick={props.shareOnFacebook}>
        Share&nbsp;
      </FacebookButton>
      <TwitterButton onClick={props.shareOnTwitter}>Tweet</TwitterButton>
      {props.nextArticle && (
        <LinkButton to={ROUTE_ARTICLE_DIR + "/" + props.nextArticle}>
          Next Article ➢
        </LinkButton>
      )}
    </CardFlattened>
  )
}
