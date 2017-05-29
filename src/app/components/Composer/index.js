// tools
import React from "react"
import PropTypes from "prop-types"
import { Editor, Html } from "slate"
import isUrl from "is-url"

import { plugins } from "./plugins"
import { schema } from "./schema"

// styles
import { PageHeader, PageByline } from "../Article/styles/header"
import { PageTitle, PageSubtitle } from "./styles"

// state
import initialState from "./state.json"

// constants
const rules = schema.rules
const html = new Html({ rules })



// return
export const ComposerHead = props => {
	return (
		<PageHeader>
			<PageTitle placeholder={ 			initialState.title }></PageTitle>
			<PageSubtitle placeholder={ 	initialState.subtitle }></PageSubtitle>
			<PageByline>Your name & profile link will appear here.</PageByline>
		</PageHeader>
	)
}
export class ComposerBody extends React.Component {
	state = {
		state: html.deserialize(localStorage.getItem("composer-state") || initialState.body),
		schema
	}
  onChange = state => this.setState({ state })
  onPaste = (e, data, state) => {
    if (data.type !== "html") return
    const { document } = html.deserialize(data.html)
    return state
      .transform()
      .insertFragment(document)
      .apply()
  }
  
  
  
  
  
  
  
  hasLinks = () => {
    const { state } = this.state
    return state.inlines.some(inline => inline.type == "link")
  }
  onPaste = (e, data, state) => {
    if (state.isCollapsed) return
    if (data.type != "text" && data.type != "html") return
    if (!isUrl(data.text)) return

    const transform = state.transform()

    if (this.hasLinks()) {
      transform.unwrapInline("link")
    }

    return transform
      .wrapInline({
        type: "link",
        data: {
          href: data.text
        }
      })
      .collapseToEnd()
      .apply()
  }
  
  
  
  
  
  
  
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
				onPaste={						this.onPaste }
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