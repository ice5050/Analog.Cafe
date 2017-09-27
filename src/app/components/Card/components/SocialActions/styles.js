// tools
import styled from "styled-components"

// styles
import { CardHeader, CardButtonStyles } from "../../styles"
import { Button } from "../../../Button"

// return
export const CardHeaderSocial = styled(CardHeader)`
  h3::before {
    content: "❤︎";
  }
`
export const CardSocialButton = styled(Button)`${CardButtonStyles};`
