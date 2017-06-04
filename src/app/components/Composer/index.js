// tools
import React from "react"
import PropTypes from "prop-types"
import { Editor, Raw } from "slate"

import { plugins } from "./plugins"
import { schema } from "./schema"
import { content } from "./loader"

// styles
import { PageHeader, PageByline } from "../Article/styles/header"
import { PageTitle, PageSubtitle } from "./styles"


// return
export const ComposerHead = props => {
	return (
		<PageHeader>
			<PageTitle placeholder=				"Write Your Title Here"	></PageTitle>
			<PageSubtitle placeholder=	 	"Subtitle (Optional)"		></PageSubtitle>
			<PageByline>Your name & profile link will appear here.</PageByline>
		</PageHeader>
	)
}
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