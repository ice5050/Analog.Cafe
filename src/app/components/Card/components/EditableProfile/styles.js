// tools
import styled from "styled-components"
import Color from "color"

// styles
import { Card, CardCaptionStyles, CardButtonStyles } from "../../styles"
import { PlainTextarea } from "../../../InputStyles"
import { CaptionStyles } from "../../../CaptionStyles"
import { ButtonStyles } from "../../../Button"

export const CardFlattened = styled(Card)`
  margin: ${props => props.theme.size.block.column.safety}em auto;
  box-shadow: 0 1px 1px
      ${props =>
        Color(props.theme.color.foreground)
          .alpha(props.theme.opacity.least * 2)
          .string()},
    0 0 0 1px
      ${props =>
        Color(props.theme.color.foreground)
          .alpha(props.theme.opacity.least)
          .string()};
`
export const CardCaptionEditable = styled(PlainTextarea)`
  ${CaptionStyles}
  ${CardCaptionStyles}
  font-style: italic;
`
export const CardButtonEditable = styled.input`
  ${ButtonStyles} ${CardButtonStyles} border: 0;
  outline: 0;
  width: 100%;
  cursor: text;
  &:active {
    background: initial !important;
    color: initial !important;
  }
`
