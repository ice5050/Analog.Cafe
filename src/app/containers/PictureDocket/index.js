// tools
import React from "react"

// components
import PictureDocket from "../../components/PictureDocket"
import { CardHeader } from "../../components/Card/styles"
import { GridRow, Square, AspectRatio } from "../../components/GridStyles"
import Link from "../../components/Link"

// styles
import placeholder from "../../components/icons/images/placeholder-figure.png"


// dictionary
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

	${ props => props.theme.size.breakpoint.max.m`
		h3 {
			font-size: 1.5em;
		}
	`}
`
const Hint = styled.div`
	font-style: italic;
	font-size: ${ props => props.theme.size.font.make.smaller }em;
	display: block;
	text-align: center;
`

// export
export default class extends React.Component {
	constructor(props) {
		super(props)
		this.uploadRequest = this.uploadRequest.bind(this)
		this.initFileUpload = this.initFileUpload.bind(this)
	}

	handleClose = event => {
		const { node, editor } = this.props
		let resolvedState
		if(event){
			event.preventDefault()
			event.stopPropagation()
			resolvedState = editor.getState()
				.transform()
				.insertBlock({ type: "paragraph" })
				.removeNodeByKey(node.key)
				.apply()
		}
		else{ // handleClose without event means auto close on image insert:
			resolvedState = editor.getState()
				.transform()
				.removeNodeByKey(node.key)
				.apply()
		}
		editor.onChange(resolvedState)

	}

	// image upload handlers
	initFileUpload = event => {
		this.fileInput.click()
	}
  handleFileUpload = e => {
    const file = e.target.files[0]
    this.uploadRequest(file)
  } // ⤵
	uploadRequest = file => {
		const { editor } = this.props
		const resolvedState = editor.getState()
			.transform()
			.insertBlock({
				type: "image",
				isVoid: true,
				data: { file, src: placeholder }
			})
			.apply()
		editor.onChange(resolvedState)
		setTimeout((function(){
			this.handleClose()
		}).bind(this), 10)
		// saveContent(this.state.state.document, resolvedState)
	}

  render() {
    // const { attributes, state, node } = this.props
    // const focus = state.isFocused && state.selection.hasEdgeIn(node)
    return (
			<PictureDocket>
				<CardHeader>
					<h3>Add Image</h3>
					<a href="#close" onClick={ this.handleClose.bind(this) } >✕</a>
				</CardHeader>
				<div>
					<GridRow>
						<Square><AspectRatio><img src="/images/thumbnails/square.jpg" alt=""/></AspectRatio></Square>
						<Square><img src="/images/thumbnails/square.jpg" alt=""/></Square>
						<SquareButton onClick={ this.initFileUpload }>
							<h3>Upload<br />New</h3>
						</SquareButton>
					</GridRow>
					<GridRow>
						<Square><AspectRatio><img src="/images/thumbnails/square.jpg" alt=""/></AspectRatio></Square>
						<Square><img src="/images/thumbnails/square.jpg" alt=""/></Square>
						<Square><img src="/images/thumbnails/square.jpg" alt=""/></Square>
					</GridRow>
					<GridRow>
						<Square><AspectRatio><img src="/images/thumbnails/square.jpg" alt=""/></AspectRatio></Square>
						<Square><img src="/images/thumbnails/square.jpg" alt=""/></Square>
						<Square><img src="/images/thumbnails/square.jpg" alt=""/></Square>
					</GridRow>
				</div>
				<Hint><Link>About image suggestions</Link></Hint>
        <input
          type=								"file"
          accept=							"image/x-png,image/jpeg"
          style={{ 						display: "none" }}
          ref={ input => { 		this.fileInput = input } }
          onChange={ 					this.handleFileUpload }
        />
			</PictureDocket>
		)
  }
}
