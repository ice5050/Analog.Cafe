// tools
import React from "react"
import PropTypes from "prop-types"
import { Editor } from "slate"
import { composerInputPlaceholders, plugins, html, stateSchema } from "./constants"

// styles
import { PageHeader, PageByline } from "../Article/styles/header"
import { PageTitle, PageSubtitle } from "./styles"


// return
export const ComposerHead = props => {
	return (
		<PageHeader>
			<PageTitle placeholder={ 			composerInputPlaceholders.title }></PageTitle>
			<PageSubtitle placeholder={ 	composerInputPlaceholders.subtitle }></PageSubtitle>
			<PageByline>Your name & profile link will appear here.</PageByline>
		</PageHeader>
	)
}

export class ComposerBody extends React.Component {
	state = {
		state: html.deserialize(localStorage.getItem("composer-state") || composerInputPlaceholders.body),
		schema: stateSchema
	}
  onChange = (state) => this.setState({ state })
	onDocumentChange = (document, state) => {
		const composerState = html.serialize(state)
		localStorage.setItem("composer-state", composerState)
	}
	render() {
		return (
			<Editor
				plugins={						plugins }
				schema={						this.state.schema }
				state={							this.state.state }
				onChange={					this.onChange }
				onDocumentChange={	this.onDocumentChange}
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
	onDocumentChange:	PropTypes.func,
	onKeyDown:				PropTypes.func,
}