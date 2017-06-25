// tools
import React from "react"
import { Editor, Raw, findDOMNode } from "slate"
import getOffsets from "positions"

// components
import ImageButton from "./components/ImageButton"

// helpers, plugins & schema
import { plugins } from "./plugins"
import { schema } from "./schema"
import { loadContent } from "../../helpers/loader"
import { saveContent } from "../../helpers/saver"

// styles
import imageProcessing from "./images/image_processing.png"



// return
export default class extends React.Component {
	constructor(props) {
		super(props)
		this.uploadRequest = this.uploadRequest.bind(this)
	}
	state = {
		state: Raw.deserialize(loadContent(), { terse: true }),
		schema,
		author: this.props.author,
		cursorContext: {
			newLine: false,
			parentBlockOffsets: { top: 0, left: 0 }
		}
	}
	handleChange = state => {
		this.setState({ state: state })

		// add information about cursor positions
		setTimeout((function(){
			const block = findDOMNode(state.document.getDescendant(state.focusBlock.key))
			const cursorContext = {
				newLine:  						state.focusBlock.isEmpty,
				parentBlockOffsets:   getOffsets(block, "top left", block, "top left"),
			}
			this.setState({ cursorContext })
		}).bind(this), 100)

	}

	// content saver
  handleDocumentChange = saveContent


	// image upload button handlers:
	handleUploadButton = e => {
    e.preventDefault()
    e.stopPropagation()
    this.fileInput.click()
  }
  handleFileUpload = e => {
    const file = e.target.files[0]
    this.uploadRequest(file)
  }
	uploadRequest = file => {
		const resolvedState = this.state.state
			.transform()
			.insertBlock({
				type: "image",
				isVoid: true,
				data: { file, src: imageProcessing }
			})
			.apply()
	  this.setState({ state: resolvedState })
		saveContent(this.state.state.document, resolvedState)
	}


	// render
	render() {
		return (
			<div>
        <ImageButton
					cursorContext={ 		this.state.cursorContext }
					onClick={ 					this.handleUploadButton }
        />
        <input
          type=								"file"
          accept=							"image/x-png,image/jpeg"
          style={{ 						display: "none" }}
          ref={ input => { 		this.fileInput = input } }
          onChange={ 					this.handleFileUpload }
        />
				<Editor
					plugins={						plugins }
					schema={						this.state.schema }
					state={							this.state.state }

					onChange={					this.handleChange }
					onDocumentChange={	this.handleDocumentChange }

					author={						this.state.author	}
					style={							{ minHeight: "28em" }}
				/>
      </div>
		)
	}
}
