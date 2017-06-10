// tools
import { html } from "../rules"

// Analog.Cafe plugins
import { MarkHotkey } from "./mark-hotkey"
import { Linkify } from "./linkify"
import { Paste } from "./paste-html"

// plugins by others
import AutoReplace from "slate-auto-replace"
import EditBlockquote from "slate-edit-blockquote"
import InsertImages from "slate-drop-or-paste-images"
import TrailingBlock from "slate-trailing-block"

// export
export const plugins = [

	// general tools
	Linkify({}),
	Paste({ html }),
	
	// hot keys
  MarkHotkey({ 	key: "b", 			type: "bold" }),
  MarkHotkey({ 	key: "i", 			type: "italic" }),
  
  // markdown shortcuts
  AutoReplace({
    trigger: 		"space",
    before: 		/^(>)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "quote" })
    }
  }),
  AutoReplace({
    trigger: 		"enter",
    before: 		/^(\*\*\*)$/,
    transform: 	(transform, e, data, matches) => {
      return transform
      	.setBlock({ type: "divider", isVoid: true })
      	.collapseToEndOfNextBlock()
      	.collapseToEndOfNextBlock()
    }
  }),
  AutoReplace({
    trigger: 		"space",
    before: 		/^(#)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "heading" })
    }
  }),
  AutoReplace({
    trigger: 		"enter",
    before: 		/./,
    onlyIn:			"heading",
    transform: 	(transform, e, data, matches) => {
      return transform
      	.splitBlock()
      	.setBlock({ type: "paragraph" })
    }
  }),
  AutoReplace({
    trigger: 		"backspace",
    after: 			/./,
    onlyIn:			"heading",
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "paragraph" })
    }
  }),
  
  // auto format rules
  AutoReplace({
    trigger: 		/(")/,
    before: 		/[^ ”]$/,
    transform: 	(transform, e, data, matches) => {
    	console.log(matches)
      return transform.insertText("”")
    }
  }),
  AutoReplace({
    trigger: 		/(")/,
    before: 		/(^)|[ ]$/,
    transform: 	(transform, e, data, matches) => {
    	console.log(matches)
      return transform.insertText("“")
    }
  }),
  
//   AutoReplace({
//     trigger: 		/./,
//     onlyIn:			"heading",
//     transform: 	(transform, e, data, matches) => {
//       return console.log(1)
//     }
//   }),
  
  // special editor menu for quote
	EditBlockquote({
		type: 				"quote",
		typeDefault: 	"paragraph",
	}),
	
	InsertImages({
    extensions: ["png", "jpeg"],
    applyTransform: (transform, file) => {
      return transform.insertBlock({
        type: "image",
        isVoid: true,
        data: { file, src: "/images/app/status-image_processing.png" },
      }).apply()
    }
  }),
  
  // trailing paragraph
  TrailingBlock({ type: "paragraph" }),
  
]