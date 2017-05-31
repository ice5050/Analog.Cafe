// tools
import React from "react"
import ReactDOMServer from 'react-dom/server'
import { Image } from "./components/Pictures"



import { Figure } from "../Pictures"
import { Picture } from "react-responsive-picture"



import { Block, Html } from "slate"

// components


// dictionary
const BLOCK_TAGS = {
  p: 						"paragraph",
  blockquote: 	"quote",
  hr:						"divider",
  h1:						"heading",
  h2:						"heading",
  h3:						"heading",
  h4:						"heading",
  a:						"link",
  figure:       "image",
}
const MARK_TAGS = {
  em: 					"italic",
  strong: 			"bold",
}

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
										return <blockquote {...props.attributes} className={className}>Add caption to your image.</blockquote>
		},
		image: 				Image,
    link: 				props => {
										const { data } = props.node
										const href = data.get("href")
										return <a {...props.attributes} href={href}>{props.children}</a>
    },
	},
	rules: [
		{
			deserialize(el, next) {
				const type = BLOCK_TAGS[el.tagName]
				if (!type) return
				return {
					kind: 		type !== BLOCK_TAGS.a ? "block" : "inline",
					data: 		type === BLOCK_TAGS.a ? { href: el.attribs.href } : {},
					type: 		type,
					nodes: 		next(el.children),
					isVoid:		type === BLOCK_TAGS.hr ? true : false
				}
			},
			serialize(object, children) {
				if (object.kind !== "block" && object.kind !== "inline") return
				switch (object.type) {
					case BLOCK_TAGS.p: 						return 	<p>{children}</p>
					case BLOCK_TAGS.h3: 					return 	<h3>{children}</h3>
					case BLOCK_TAGS.blockquote: 	return 	<blockquote>{children}</blockquote>
					case BLOCK_TAGS.hr:						return 	<hr />
					case BLOCK_TAGS.a:						return 	<a
																									href={object.data.get("href")}
																									data-key={object.data.get("key")}>{children}</a>
					//case BLOCK_TAGS.figure:       return 	<Figure src="/images/poster.jpg">Text</Figure>
					//case BLOCK_TAGS.figure:       return 	<Figure src={{...this.props}}>text</Figure>
					case BLOCK_TAGS.figure:        {
					
																					console.log(1)
																					return <figure>{children}</figure>
																				}
					default:											return 	{children}
					//<Figure {...attributes} src={src} className={className}>Add caption to your image.</Figure>
					
					
					
					// const { attributes, state, node } = this.props
//     			const { src } = this.state
    
    
    
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
		
		// Rule to insert a paragraph below a void node if that node is the last one in the document.
    {
      match: (node) => {
        return node.kind === "document"
      },
      validate: (document) => {
        const lastNode = document.nodes.last()
        return lastNode && lastNode.isVoid ? true : null
      },
      normalize: (transform, document) => {
        const block = Block.create(defaultBlock)
        transform.insertNodeByKey(document.key, document.nodes.size, block)
      }
    },
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
const rules = schema.rules
export const html = new Html({ rules })