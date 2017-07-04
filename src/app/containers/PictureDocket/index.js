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
		event.stopPropagation()
		const { node, editor } = this.props
    const resolvedState = editor.getState()
      .transform()
			.insertBlock({ type: "paragraph" })
      .removeNodeByKey(node.key)
      .apply()

		// console.log(editor.getState(), resolvedState)
		editor.onChange(resolvedState)
		// editor.setState({ state: resolvedState })

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
