// tools
import React from "react"
import PropTypes from "prop-types"
import { Editor, Raw } from "slate"


import { plugins } from "./plugins"
import { schema } from "./schema"
import { content } from "./loader"


// return
export class ComposerBody extends React.Component {
	state = {
		state: Raw.deserialize(content(), {terse: true}),
		schema
	}
  onChange = state => this.setState({ state })
	render() {
		return (
			<Editor
				plugins={						plugins }
				schema={						this.state.schema }
				state={							this.state.state }
				onChange={					this.onChange }
				onPaste={						this.onPaste }
				onDocumentChange={	this.onDocumentChange }
				onKeyDown={					this.onKeyDown }
			/>
		)
	}
}

// declare
Editor.propTypes = {
	plugins:					PropTypes.array,
	schema:						PropTypes.object,
	state: 						PropTypes.object,
	onChange:					PropTypes.func,
	onPaste:					PropTypes.func,
	onDocumentChange:	PropTypes.func,
	onKeyDown:				PropTypes.func,
}