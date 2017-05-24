// tools
import React from "react"
import PropTypes from "prop-types"
import { Editor } from "slate"
import { initialState, stateSchema } from "./constants"

// components
import { Header } from "../../../components/Composer"
import { Section, Article } from "../../../components/Article"


// render
export class Composer extends React.Component {
	state = {
		state: initialState,
		schema: stateSchema,
	}
  onChange = (state) => {
    this.setState({ state })
  }
  /*onKeyDown = (event, data, state) => {  

    // Return with no changes if it's not the "7" key with shift pressed.
    if (event.which != 55 || !event.shiftKey) return

    // Prevent the ampersand character from being inserted.
    event.preventDefault()

    // Transform the state by inserting "and" at the cursor's position.
    const newState = state
      .transform()
      .insertText('and')
      .apply()

    // Return the new state, which will cause the editor to update it.
    return newState
    
		 }*/
	onKeyDown = (event, data, state) => {
	// Return with no changes if it's not the "`" key with cmd/ctrl pressed.
	if (event.which !== 67 || !event.metaKey || !event.altKey) return

	// Prevent the "`" from being inserted by default.
	event.preventDefault()

	// Determine whether any of the currently selected blocks are code blocks.
  const isCode = state.blocks.some(block => block.type === 'code')
    
	// Toggle the block type depending on `isCode`.
	return state
		.transform()
		.setBlock(isCode ? 'paragraph' : 'code')
		.apply()
  }
	render() {
		return (
			<Article>
				<Header />
				<Section>
					<Editor
						schema={this.state.schema}
						state={this.state.state}
						onChange={this.onChange}
						onKeyDown={this.onKeyDown}
					/>
				</Section>
			</Article>
		)
	}
}

// declare
Editor.propTypes = {
	state: 				PropTypes.object,
	onChange:			PropTypes.func,
}