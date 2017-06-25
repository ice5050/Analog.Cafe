// tools
import React from "react"
import styled from "styled-components"

// components
import Button from "../../../../../components/Button"

// styles
const ImageButton = styled(Button)`
  position: absolute;
  z-index: ${ props => props.theme.layer.up - 1 };
  padding: ${ props => props.theme.size.block.spacing / 5 }em ${ props => props.theme.size.block.spacing / 2 }em;
  margin-top: 2px;
  width: 8em;
  border-radius: ${ props => props.theme.effects.borderRadius.small }em;

  right: -${ props => props.theme.size.block.column.safety }em;
  ${ props => props.theme.size.breakpoint.max.m`
		right: 0;
	`}
  ${ props => props.theme.size.breakpoint.max.s`
		right: -${ props => props.theme.size.block.spacing }em;
	`}
`

// return
export default props => {
  return (
    <ImageButton
      style={{
        top: props.cursorContext ? (props.cursorContext.parentBlockOffsets.top) : 0,
        display: (props.cursorContext.newLine) ? "block" : "none"
      }}
      onClick={ props.onClick }
    >↫ Add Image</ImageButton>
	)
}
