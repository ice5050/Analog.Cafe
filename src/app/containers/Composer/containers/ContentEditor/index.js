// tools
import React from "react"
import { Editor, Raw } from "slate"

// helpers, plugins & schema
import { plugins } from "./plugins"
import { schema } from "./schema"
import { loadContent } from "../../helpers/loader"
import { saveContent } from "../../helpers/saver"


// return
export default class extends React.Component {
	state = {
		state: Raw.deserialize(loadContent(), {terse: true}),
		schema,
		author: this.props.author,
	}
  onChange = state => this.setState({ state })
  onDocumentChange = saveContent
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
				author={						this.state.author	}
				style={							{minHeight:"15em"} }
			/>
		)
	}
}
