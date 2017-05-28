// tools
import React from "react"

// dictionary
const BLOCK_TAGS = {
  p: 						"paragraph",
  blockquote: 	"quote",
}
const MARK_TAGS = {
  em: 					"italic",
  strong: 			"bold",
}

// exports
export const schema = {
	nodes: {
		paragraph: 		props => <p>{props.children}</p>,
		quote: 				(props) => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const className = focus ? "focus" : "nofocus"
										return <blockquote {...props.attributes} className={className}>{props.children}</blockquote>
									},
	},
	rules: [
		{
			deserialize(el, next) {
				const type = BLOCK_TAGS[el.tagName]
				if (!type) return
				return {
					kind: "block",
					type: type,
					nodes: next(el.children)
				}
			},
			serialize(object, children) {
				if (object.kind !== "block") return
				switch (object.type) {
					case "paragraph": return <p>{children}</p>
					case "quote": 		return <blockquote>{children}</blockquote>
					default:					return {children}
				}
			}
		},
		{
			deserialize(el, next) {
				const type = MARK_TAGS[el.tagName]
				if (!type) return
				return {
					kind: "mark",
					type: type,
					nodes: next(el.children)
				}
			},
			serialize(object, children) {
				if (object.kind !== "mark") return
				switch (object.type) {
					case "bold": 		return <strong>{children}</strong>
					case "italic": 	return <em>{children}</em>
					default: 				return {children}
				}
			}
		}
	],
	marks: {
		bold: 			props => <strong>{props.children}</strong>,
		italic: 		props => <em>{props.children}</em>,
	},
}