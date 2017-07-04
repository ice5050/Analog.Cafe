// tools
import React from "react"
// import axios from "axios"

// components
import PictureDocket from "../../components/PictureDocket"
import { CardHeader } from "../../components/CardStyles"
import { GridRow, Square } from "../../components/GridStyles"


// dictionary
// import { ROUTE_IMAGE_API } from "./routes"
import styled from "styled-components"
const SquareButton = styled(Square)`
	cursor: pointer;
	display: flex;
  justify-content: center;
  text-align: center;
	align-items: center;
	background-color: ${ props => props.theme.color.brand };
	h3 { padding: 0; }

	&:active {
		background-color: ${ props => props.theme.color.foreground };
	}
`

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
				<div>
					<GridRow>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<SquareButton>
							<h3>Upload<br />New</h3>
						</SquareButton>
					</GridRow>
					<GridRow>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
					</GridRow>
					<GridRow>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
						<Square><img src="/images/thumbnails/square.jpg"/></Square>
					</GridRow>
			</div>
			</PictureDocket>
		)
  }
}
