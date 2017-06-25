// tools
import React from "react"
import { Editor, Raw } from "slate"

// components
import Button from "../../../../components/Button"

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
	}
  onChange = state => this.setState({ state: state })

	// content saver
  onDocumentChange = saveContent

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
        <Button onClick={ 		this.handleUploadButton }>
          Add an Image
          &nbsp;<span
						role=							"img"
						aria-label=				"Image icon"
					>🌅</span>
        </Button>
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
					onChange={					this.onChange }
					onPaste={						this.onPaste }
					onDocumentChange={	this.onDocumentChange }
					onKeyDown={					this.onKeyDown }
					author={						this.state.author	}
					style={							{ minHeight: "28em" }}
				/>
      </div>
		)
	}
}
