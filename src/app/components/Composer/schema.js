// tools
import React from "react"
import { Block } from "slate"

// components
import { Figure } from "../Pictures"

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
		quote: 				props => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const className = focus ? "focus" : "nofocus"
										return <blockquote {...props.attributes} className={className}>{props.children}</blockquote>
		},
		image: 				props => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const src = node.data.get("src")
										const className = focus ? "active" : null
										return (
											<Figure src={src} className={className} {...props.attributes} >Image caption</Figure>
										)
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
					case BLOCK_TAGS.p: 						return <p>{children}</p>
					case BLOCK_TAGS.blockquote: 	return <blockquote>{children}</blockquote>
					default:											return {children}
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
					case MARK_TAGS.strong: 	return <strong>{children}</strong>
					case MARK_TAGS.em: 			return <em>{children}</em>
					default: 								return {children}
				}
			}
		},
		
		// Rule to insert a paragraph below a void node (the image) if that node is the last one in the document.
    {
      match: (node) => {
        return node.kind == "document"
      },
      validate: (document) => {
        const lastNode = document.nodes.last()
        return lastNode && lastNode.isVoid ? true : null
      },
      normalize: (transform, document) => {
        const block = Block.create(defaultBlock)
        transform.insertNodeByKey(document.key, document.nodes.size, block)
      }
    }
    //
    
	],
	marks: {
		bold: 			props => <strong>{props.children}</strong>,
		italic: 		props => <em>{props.children}</em>,
	},
}
export const defaultBlock = {
  type: BLOCK_TAGS.p,
  isVoid: false,
  data: {}
}