// tools
import { Html, Text } from "slate"

// components


// return

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

// deserialize copy-paste html content
const rules = [
	{
		deserialize(el, next) {
			const block = BLOCK_TAGS[el.tagName]
			if (!block) return
			console.log(el.tagName)
			switch (block) {
				case "paragraph" :
				case "quote": { console.log("p")
					return {
						kind: "block",
						type: block,
						nodes: next(el.children)
					}
				}
				case "heading" : { console.log("h")
					return {
						kind: "block",
						type: block,
						nodes: textify(el) ? [ Text.createFromString(textify(el)) ] : next(el.children)
					}
				}
				case "image" : { console.log("img")
					return {
						kind: "block",
						type: "image",
						isVoid: true,
						data: { src: el.attribs.src || el.attribs.srcset }, // this image needs to be uploaded
					}
				}
				case "link" : { console.log("a")
					return {
						kind: "inline",
						type: "link",
						data: {
							href: el.attribs.href
						},
						nodes: textify(el) ? [ Text.createFromString(textify(el)) ] : next(el.children)
					}
				}
				default : return null
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
]
export const html = new Html({ rules })