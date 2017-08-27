// tools
import styled from "styled-components"
import Color from "color"

// components
import { Card, CardCaptionStyles } from "../../styles"
import { PlainTextarea } from "../../../InputStyles"

import { CaptionStyles } from "../../../CaptionStyles"

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
