// tools
import React from "react"
import { Placeholder } from "slate"

// return
export default class extends React.Component {
  render(){
    const { node, state } = this.props
    const placeholderText = this.props.placeholderText || "Start typing..."
    return (
      <Placeholder
        firstOnly={ false }
        parent={ node }
        node={ node }
        state={ state }
      >
        { placeholderText }
      </Placeholder>
    )
  }
}
