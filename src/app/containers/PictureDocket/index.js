// tools
import React from "react"
// import axios from "axios"

// components
import PictureDocket from "../../components/PictureDocket"
import { CardHeader } from "../../components/CardStyles"


// dictionary
// import { ROUTE_IMAGE_API } from "./routes"

// export
export default class extends React.Component {

	handleClose = event => {
		event.preventDefault()
		const { node, editor } = this.props
    const resolvedState = editor.getState()
      .transform()
      .removeNodeByKey(node.key)
      .apply()
		// editor.setState({ state: resolvedState })
		editor.onChange(resolvedState)

	}

  render() {
    // const { attributes, state, node } = this.props
    // const focus = state.isFocused && state.selection.hasEdgeIn(node)
    return (
			<PictureDocket>
				<CardHeader>
					<h3>Add Image <span role="img" aria-label="Film strip">🎞</span></h3>
					<a href="#close" onClick={ this.handleClose.bind(this) } >✕</a>
				</CardHeader>
				image panel
			</PictureDocket>
		)
  }
}
