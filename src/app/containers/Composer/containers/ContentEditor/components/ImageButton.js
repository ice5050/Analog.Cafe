// tools
import React from "react"
import styled from "styled-components"

// components
import Button from "../../../../../components/Button"

// styles
const ImageButton = styled(Button)`
  position: absolute;
  z-index: ${ props => props.theme.layer.up + 1 };
  padding: ${ props => props.theme.size.block.spacing / 5 }em ${ props => props.theme.size.block.spacing / 2 }em;
  margin-left: ${ props => props.theme.size.block.column.safety }em;
  margin-top: 0;
`

// return
export default props => {
	return (
    <ImageButton
      style={{
        top: props.cursorContext ? props.cursorContext.parentBlockOffsets.top + "px" : 0,
        // marginLeft: props.cursorContext ? props.cursorContext.parentBlockOffsets.left + "px" : 0,
        display: props.cursorContext.newLine ? "block" : "none"
      }}
    >
      Add an Image
      &nbsp;<span role="img" aria-label="Image icon">🌅</span>
    </ImageButton>
	)
}
