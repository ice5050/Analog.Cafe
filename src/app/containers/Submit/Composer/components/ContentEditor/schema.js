// tools
import React from "react"


// components
import { Image } from "../../../../Picture"


// return
export const schema = {
	nodes: {
		paragraph: 		props => <p>{props.children}</p>,
		heading:			props => <h3>{props.children}</h3>, // no links or style should be allowed in headings
		divider:			props => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const className = focus ? "focus" : "nofocus"
										return <hr className={className} />
		},
		quote: 				props => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const className = focus ? "focus" : "nofocus"
										return <blockquote {...props.attributes} className={className}>{props.children}</blockquote>
		},
		image:	 			Image,
    link: 				props => {
										const { data } = props.node
										const href = data.get("href")
										return <a {...props.attributes} href={href}>{props.children}</a>
    },
	},
	marks: {
		bold: 			props => <strong>{props.children}</strong>,
		italic: 		props => <em>{props.children}</em>,
	},
}