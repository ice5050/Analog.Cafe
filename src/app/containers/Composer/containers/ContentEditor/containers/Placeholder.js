// tools
import React from "react"
import { Placeholder } from "slate"

// return
export default class extends React.Component {
  render(){
    const { node, state, parent } = this.props
    return (
      <Placeholder
        firstOnly={ true }
        parent={ parent }
        node={ node }
        state={ state }
      >
        { this.props.children }
      </Placeholder>
    )
  }
}
