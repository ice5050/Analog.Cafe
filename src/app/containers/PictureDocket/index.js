// tools
import React from "react"
import axios from "axios"

// components
import PictureDocket from "../../components/PictureDocket"
import { CardHeader } from "../../components/Card/styles"
import { Caption } from "../../components/CaptionStyles"
import { GridContainer, GridRow, Square, GridButton, AspectRatio } from "../../components/GridStyles"
import { ModalDispatch } from "../Modal"
import { ROUTE_UPLOAD_IMAGE_API } from "../../../constants/submission"

// styles
import placeholder from "../../components/_icons/images/placeholder-figure.jpg"

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
		var data = new FormData();
		data.append("file", file)
		axios.post(ROUTE_UPLOAD_IMAGE_API, data,
		{
			headers: {
				'content-type': 'multipart/form-data',
				'Authorization': "JWT " + localStorage.getItem('token')
			}
		})
    .then(response => {
			const { editor } = this.props
			const resolvedState = editor.getState()
				.transform()
				.insertBlock({
					type: "image",
					isVoid: true,
					data: { src: response.data.url }
				})
				.apply()
			editor.onChange(resolvedState)
			setTimeout((function(){
				this.handleClose()
			}).bind(this), 10)
		})
	}

  render() {
    // const { attributes, state, node } = this.props
    // const focus = state.isFocused && state.selection.hasEdgeIn(node)
    return (
			<PictureDocket>
				<CardHeader>
					<h3 style={{ paddingTop: ".25em" }}>Add an image:</h3>
					<a href="#close" onClick={ this.handleClose.bind(this) } >✕</a>
				</CardHeader>
				<GridContainer>
					<GridRow>
						<Square><AspectRatio><img src="/images/thumbnails/square.jpg" alt=""/></AspectRatio></Square>
						<Square><img src="/images/thumbnails/square.jpg" alt=""/></Square>
						<GridButton onClick={ this.initFileUpload } red>
							<div>
								<span
									role="img"
									aria-label="Laptop or mobile device"
									style={{}}
								>💻📱</span>
								<br />
								Upload New
							</div>
						</GridButton>
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
				</GridContainer>
				<Caption style={{ opacity: ".5", textAlign: "center"}}><ModalDispatch
					with={{
						info: {
							image: "/images/banners/image-suggestions.jpg",
							title: "Image Suggestions",
							text: "You can freely use these hand-picked film photographs by the editor within your submission. A credit to the original photographer will be added automatically. Of course you can still upload your own images!"
						},
						id: "hints/image-suggestions"
					}}
				>What is this?</ModalDispatch></Caption>
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
