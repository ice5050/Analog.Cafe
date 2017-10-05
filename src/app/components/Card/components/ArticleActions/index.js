// tools
import React from "react"

// styles
import { TimeStamp } from "../../../ArticleStyles"
import { CardFlattened } from "../../styles"
import { LinkButton } from "../../../Button"
import {
  TwitterButton,
  FacebookButton,
  TwitterLink,
  FacebookLink,
  InstagramLink
} from "../../../Button/components/SocialButtons"
import slugToTitle from "../../../../../utils/slug-to-title"
import { datestamp, lunar, percise } from "../../../../../utils/datestamp"

import { ROUTE_ARTICLE_DIR } from "../../../../../constants/article"

// return
const ActionsCard = props => {
  if (props.thisArticle !== "thank-you-for-reading-87fv")
    return (
      <CardFlattened>
        <FacebookButton onClick={props.shareOnFacebook}>
          Share&nbsp;
        </FacebookButton>
        <TwitterButton onClick={props.shareOnTwitter}>Tweet</TwitterButton>
        {props.nextArticle && (
          <LinkButton
            to={ROUTE_ARTICLE_DIR + "/" + props.nextArticle}
            title={slugToTitle(props.nextArticle)}
          >
            Next Post <span>➢</span>
          </LinkButton>
        )}
      </CardFlattened>
    )
  else
    return (
      <CardFlattened>
        <TwitterLink to="https://twitter.com/analog_cafe">
          Follow on Twitter
        </TwitterLink>

        <FacebookLink to="https://facebook.com/analog8cafe">
          Follow on Facebook
        </FacebookLink>

        <InstagramLink to="https://instagram.com/analog_cafe">
          Follow on Instagram
        </InstagramLink>
      </CardFlattened>
    )
}

const DatePublished = props => {
  if (
    props.thisArticlePostDate &&
    props.thisArticle !== "thank-you-for-reading-87fv"
  )
    return (
      <TimeStamp
        dateTime={percise(props.thisArticlePostDate)}
        itemprop="datePublished"
        title={"Published on " + datestamp(props.thisArticlePostDate) + "."}
      >
        {lunar(props.thisArticlePostDate)}
      </TimeStamp>
    )
  else if (
    props.thisArticlePostDate &&
    props.thisArticle === "thank-you-for-reading-87fv"
  )
    return null
  else return null
}

export default props => {
  return (
    <div style={{ clear: "both" }}>
      <DatePublished {...props} />
      <ActionsCard {...props} />
    </div>
  )
}
