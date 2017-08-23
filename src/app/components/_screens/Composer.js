// tools
import React from "react"

// components
import { Article } from "../ArticleStyles"
import { Button } from "../Button"
import { ModalDispatch } from "../../containers/Modal"
import Composer from "../../containers/Composer"

import { ROUTE_SUBMISSION_API } from "../../../constants/submission"

var requestData = {
  raw: "",
  title: "",
  subtitle: ""
}

// render
export default props => {
  return (
    <Article>
      <Composer requestData={requestData} />
      <ModalDispatch
        with={{
          request: {
            url: ROUTE_SUBMISSION_API,
            data: requestData,
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
