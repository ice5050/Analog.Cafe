// tools
import React from "react"

// styles
import { CardFlattened } from "../../styles"
import { Button } from "../../../Button"
import {
  TwitterButton,
  FacebookButton
} from "../../../Button/components/SocialButtons"

// return
export default props => {
  return (
    <CardFlattened>
      <FacebookButton
        onClick={window.open("http://www.facebook.com/sharer.php?s=100&p")}
      >
        Share&nbsp;
      </FacebookButton>
      <TwitterButton>Tweet</TwitterButton>
      <Button>Next Article ➢</Button>
    </CardFlattened>
  )
}
