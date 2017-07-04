// tools
import React from "react"
import { Editor, Raw } from "slate"
import getOffsets from "positions"

// components
import ImageButton from "./components/ImageButton"

// helpers, plugins & schema
import { plugins } from "./plugins"
import { schema } from "./schema"
import { loadContent } from "../../helpers/loader"
import { saveContent } from "../../helpers/saver"

// styles
import placeholder from "../../../../components/icons/images/placeholder-figure.jpg"



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
			isFocused: false,
			newLine: false,
			parentBlockOffsets: { top: 0, left: 0 }
		}
	}
	handleChange = state => {
		this.setState({ state: state })

		// add information about cursor positions
		setTimeout((function(){
			// const block = findDOMNode(state.document.getDescendant(state.focusBlock.key))
			// findDOMNode returns error every time; instead we just need it to exit the function vv
			const nodeKey = state.focusBlock.key
			const block = window.document.querySelector(`[data-key="${nodeKey}"]`)
			if(!block) return

			const cursorContext = {
				firstEmptyLine:				state.document.isEmpty && state.document.nodes.size === 1,
				newLine:  						state.focusBlock.isEmpty,
				parentBlockOffsets:   getOffsets(block, "top left", block, "top left"),
				isFocused: 						this.state.cursorContext.isFocused,
			}
			this.setState({ cursorContext })
		}).bind(this), 300)
	}

	// content saver
  handleDocumentChange = saveContent






	// image upload button handlers:
	handleImageButton = e => {
    e.preventDefault()
    e.stopPropagation()
    //------------------>>> this.fileInput.click()

		const resolvedState = this.state.state
			.transform()
			.insertBlock({
				type: "docket",
				isVoid: true
			})
			.apply()
	  this.setState({
			state: resolvedState,
			cursorContext: { ...this.state.cursorContext, newLine: false	}
		})
		saveContent(this.state.state.document, resolvedState)

  }







  handleFileUpload = e => {
    const file = e.target.files[0]
    this.uploadRequest(file)
  } // ⤵
	uploadRequest = file => {
		const resolvedState = this.state.state
			.transform()
			.insertBlock({
				type: "image",
				isVoid: true,
				data: { file, src: placeholder }
			})
			.apply()
	  this.setState({ state: resolvedState })
		saveContent(this.state.state.document, resolvedState)
	}


	// render
	render() {
		return (
			<div style={						{ position: "relative" }}>
        <ImageButton
					cursorContext={ 		this.state.cursorContext }
					onClick={ 					this.handleImageButton }
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
