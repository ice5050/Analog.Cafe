// tools
import React from "react"
import { Editor, EditorState, RichUtils } from "draft-js"

// components
import { Section, Article } from "../../../components/Page"


// render
export class Composer extends React.Component {
	constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = (editorState) => this.setState({ editorState })
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
  }
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
      this.onChange(newState)
      return "handled"
    }
    return "not-handled"
  }
  focus() {
  	this.refs.editor.focus()
  }
  
	render() {
		return (
			<Article>
				<Section>
					<Editor
						editorState={ 			this.state.editorState } 
						onChange={ 					this.onChange }
						handleKeyCommand={	this.handleKeyCommand }
						
						placeholder="Start typing..."
						spellCheck={ 				true }
						ref="editor"
					/>
				</Section>
			</Article>
		)
	}
}
