// tools
import React from "react"
import { Image } from "./components/Pictures"
import { Html } from "slate"

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
				if (!block || block==="image") return
				return {
					kind: "block",
					type: block,
					nodes: next(el.children)
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
		{
			deserialize(el, next) {
				console.log(el.tagName)
				if (el.tagName !== "a") return
				return {
					kind: "inline",
					type: "link",
					nodes: next(el.children),
					data: {
						href: el.attribs.href
					}
				}
			}
		},
		{
			deserialize(el, next) {
				const block = BLOCK_TAGS[el.tagName]
				if (block !== "image") return
				return {
					kind: "block",
					type: "image",
					isVoid: true,
					data: { src: "/images/poster.jpg" },
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
