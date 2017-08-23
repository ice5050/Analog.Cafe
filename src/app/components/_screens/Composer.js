// tools
import React from "react"

// components
import { Article } from "../ArticleStyles"
import { Button } from "../Button"
import { ModalDispatch } from "../../containers/Modal"
import Composer from "../../containers/Composer"

import { ROUTE_SUBMISSION_API } from "../../../constants/submission"
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
      <Composer composerState={composerState} />
      <ModalDispatch
        with={{
          request: {
            url: ROUTE_SUBMISSION_API,
            data: composerState,
            method: "POST",
            headers: { Authorization: "JWT " + localStorage.getItem("token") }
          }
        }}
        wrapperElement="div"
      >
        <Button red>
          Send Submission{" "}
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </Button>
      </ModalDispatch>
    </Article>
  )
}
