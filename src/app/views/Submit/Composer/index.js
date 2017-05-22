// tools
import React from "react"
import { Editor, EditorState, RichUtils } from "draft-js"

// components
import { Header } from "../../../components/Composer"
import { Section, Article } from "../../../components/Article"
import { Wrapper } from "./styles"


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
  
  makeBold() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"))
	}
	makeItalic() {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"))
	}
  
	render() {
		return (
			<Article>
			<Header 
				pageTitle="Submit your shit" 
				pageSubtitle="Because it'll be awesome" 
				pageByline="Just Dowit" 
			/>

				<Section>
					<span onClick={ this.makeBold.bind(this) }>[Bold]</span> <span onClick={ this.makeItalic.bind(this) }>[Italic]</span>

					<Wrapper><Editor
						editorState={ 			this.state.editorState } 
						onChange={ 					this.onChange }
						handleKeyCommand={	this.handleKeyCommand }
						
						placeholder="Start typing..."
						spellCheck={ 				true }
						ref="editor"
					/></Wrapper>
					
				</Section>
			</Article>
		)
	}
}
