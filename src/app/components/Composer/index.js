// tools
import React from "react"
import PropTypes from "prop-types"
import { Editor } from "slate"
import { initialState, headerPlaceholders, stateSchema, plugins } from "./constants"

// styles
import { PageHeader, PageByline } from "../Article/styles/header"
import { PageTitle, PageSubtitle } from "./styles"


// return
export const ComposerHead = props => {
	return (
		<PageHeader>
			<PageTitle placeholder={ headerPlaceholders.titlePlaceholder }></PageTitle>
			<PageSubtitle placeholder={ headerPlaceholders.subtitlePlaceholder }></PageSubtitle>
			<PageByline>Your name & profile link will appear here.</PageByline>
		</PageHeader>
	)
}
export class ComposerBody extends React.Component {
	state = {
		state: initialState,
		schema: stateSchema,
	}
  onChange = (state) => {
    this.setState({ state })
  }
  /*onKeyDown = (event, data, state) => {  

    // Return with no changes if it"s not the "7" key with shift pressed.
    if (event.which != 55 || !event.shiftKey) return

    // Prevent the ampersand character from being inserted.
    event.preventDefault()

    // Transform the state by inserting "and" at the cursor"s position.
    const newState = state
      .transform()
      .insertText("and")
      .apply()

    // Return the new state, which will cause the editor to update it.
    return newState
    
		 }*/
	/*
	
// 	onKeyDown = (event, data, state) => {
//     if (!event.metaKey) return
// 
    // Decide what to do based on the key code...
    // switch (event.which) {
//       // When "B" is pressed, add a "bold" mark to the text.
//       case 66: {
//         event.preventDefault()
//         return state
//           .transform()
//           .addMark("bold")
//           .apply()
//       }
//       // When "`" is pressed, keep our existing code block logic.
//       case 67: {
//         if (!event.altKey) return
//         const isCode = state.blocks.some(block => block.type === "code")
//         event.preventDefault()
//         return state
//           .transform()
//           .setBlock(isCode ? "paragraph" : "code")
//           .apply()
//       }
//       default: {}
//     }
//   }  

*/  
	render() {
		return (
			<Editor
				plugins={		plugins }
				schema={		this.state.schema }
				state={			this.state.state }
				onChange={	this.onChange }
				onKeyDown={	this.onKeyDown }
			/>
		)
	}
}

// declare
Editor.propTypes = {
	state: 				PropTypes.object,
	onChange:			PropTypes.func,
}