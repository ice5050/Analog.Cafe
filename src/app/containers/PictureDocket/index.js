// tools
import React from "react"
import axios from "axios"

// components

// dictionary
import { ROUTE_IMAGE_API } from "./routes"

// export
export default class extends React.Component {
  render() {
    const { attributes, state, node } = this.props
    const focus = state.isFocused && state.selection.hasEdgeIn(node)

    return <div { ...attributes }>image panel</div>
  }
}
