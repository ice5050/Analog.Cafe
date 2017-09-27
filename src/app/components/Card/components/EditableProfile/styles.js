// tools
import styled from "styled-components"
import Color from "color"

// styles
import {
  Card,
  CardCaptionStyles,
  CardButtonStyles,
  CardHeader
} from "../../styles"
import { TextareaWithHighlights } from "../../../InputStyles"
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
export const CardHeaderEditable = styled(CardHeader)`
  padding: 0;
  input {
    padding: ${props => props.theme.size.block.spacing / 4}em
      ${props => props.theme.size.block.spacing / 2}em;
  }
`
export const CardCaptionEditable = styled(TextareaWithHighlights)`
  ${CaptionStyles} ${CardCaptionStyles} font-style: italic;
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
