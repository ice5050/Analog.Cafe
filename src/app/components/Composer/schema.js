// tools
import React from "react"
import ReactDOMServer from 'react-dom/server'


import { Image } from "./components/Pictures"



import { Figure } from "../Pictures"
import { Picture } from "react-responsive-picture"



import { Block, Html } from "slate"

// components


// dictionary
// const BLOCK_TAGS = {
//   p: 						"paragraph",
//   blockquote: 	"quote",
//   hr:						"divider",
//   h1:						"heading",
//   h2:						"heading",
//   h3:						"heading",
//   h4:						"heading",
//   a:						"link",
//   image:        "image",
// }
// const MARK_TAGS = {
//   em: 					"italic",
//   strong: 			"bold",
// }

// exports
export const schema = {
	nodes: {
		paragraph: 		props => <p>{props.children}</p>,
		heading:			props => <h3>{props.children}</h3>,
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
		image: 				Image,
    link: 				props => {
										const { data } = props.node
										const href = data.get("href")
										return <a {...props.attributes} href={href}>{props.children}</a>
    },
	},
	// rules: [		
// 		// Rule to insert a paragraph below a void node if that node is the last one in the document.
//     {
//       match: (node) => {
//         return node.kind === "document"
//       },
//       validate: (document) => {
//         const lastNode = document.nodes.last()
//         return lastNode && lastNode.isVoid ? true : null
//       },
//       normalize: (transform, document) => {
//         const block = Block.create(defaultBlock)
//         transform.insertNodeByKey(document.key, document.nodes.size, block)
//       }
//     },
//     //
//     
// 	],
	marks: {
		bold: 			props => <strong>{props.children}</strong>,
		italic: 		props => <em>{props.children}</em>,
	},
}
// export const defaultBlock = {
//   type: BLOCK_TAGS.p,
//   isVoid: false,
//   data: {}
// }
// const rules = schema.rules
// export const html = new Html({ rules })

export const initialContent =
  {
    nodes: [
      {
        kind: 'block',
        type: 'paragraph'
      }
    ]
  }
