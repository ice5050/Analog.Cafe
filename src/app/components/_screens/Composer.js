// tools
import React from "react"
import Helmet from "react-helmet"
import emojis from "emojis"

// components
import { Article } from "../ArticleStyles"
import { Button } from "../Button"
import { ModalDispatch } from "../../containers/Modal"
import Composer from "../../containers/Composer"

import {
  DEFAULT_COMPOSER_EDITOR_STATE,
  DEFAULT_COMPOSER_HEADER_STATE
} from "../../../constants/composer"

const composerState = {
  raw: DEFAULT_COMPOSER_EDITOR_STATE,
  title: DEFAULT_COMPOSER_HEADER_STATE.title,
  subtitle: DEFAULT_COMPOSER_HEADER_STATE.subtitle
}

// render
export default props => {
  return (
    <Article>
      <Helmet>
        <title>Composer</title>
        <meta
          name="description"
          content="A tool to upload, edit and submit your photo essays and stories."
        />
      </Helmet>
      <Composer composerState={composerState} />
      <ModalDispatch
        with={{
          request: {
            url: "/api/messages/submit-consent.json"
          }
        }}
        style={{ textDecoration: "none" }}
        wrapperElement="div"
      >
        <Button red>Send Submission {emojis.CHECKMARK}</Button>
      </ModalDispatch>
    </Article>
  )
}
