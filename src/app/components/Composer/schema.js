// tools
import React from "react"
import { Image } from "./components/Pictures"
import { Html, Text } from "slate"

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
  img: 	 		    "image",
}
const MARK_TAGS = {
  em: 					"italic",
  i:						"italic",
  strong: 			"bold",
  b:						"bold",
}

// get text from all node children
const textify = (el) => {
	let textNode = el.children.filter(function(node) {
		return node.type === "text"
	})[0]
	return textNode ? textNode.data : false
}

// exports
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
	
	// rules to deserialize content on HTML paste
	rules: [
		{
			deserialize(el, next) {
				const block = BLOCK_TAGS[el.tagName]
				switch (block) {
					case "paragraph" :
					case "quote": {
						return {
							kind: "block",
							type: block,
							nodes: next(el.children)
						}
					}
					case "heading" : {
						return {
							kind: "block",
							type: block,
							nodes: textify(el) ? [ Text.createFromString(textify(el)) ] : next(el.children)
						}
					}
					case "image" : {
						return {
							kind: "block",
							type: "image",
							isVoid: true,
							data: { src: el.attribs.src || el.attribs.srcset }, // this image needs to be uploaded
						}
					}
					case "link" : {
						return {
							kind: "inline",
							type: "link",
							data: {
								href: el.attribs.href
							},
							nodes: textify(el) ? [ Text.createFromString(textify(el)) ] : next(el.children)
						}
					}
				}
			}
		},
		{
			deserialize(el, next) {
				const mark = MARK_TAGS[el.tagName]
				if (!mark) return
				return {
					kind: "mark",
					type: mark,
					nodes: next(el.children)
				}
			}
		},
	],
	marks: {
		bold: 			props => <strong>{props.children}</strong>,
		italic: 		props => <em>{props.children}</em>,
	},
}
const rules = schema.rules
export const html = new Html({ rules })


// this needs to be pulled form state.json
export const initialContent =
{
	nodes: [
		{
			kind: "block",
			type: "paragraph"
		}
	]
}
