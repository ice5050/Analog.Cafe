// tools
import { html } from "../rules"
import toTitleCase from "titlecase"

// styles
import placeholder from "../../../../../components/icons/images/placeholder-figure.jpg"

// Analog.Cafe plugins
import { MarkHotkey } from "./mark-hotkey"
import { Linkify } from "./linkify"
import { Paste } from "./paste-html"

// plugins by others
import AutoReplace from "slate-auto-replace"
import EditBlockquote from "slate-edit-blockquote"
import InsertImages from "slate-drop-or-paste-images"
import TrailingBlock from "slate-trailing-block"

// components


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
      return transform.setBlock({ type: "quote" }) // quote
    }
  }),
  AutoReplace({
    trigger: 		"enter",
    before: 		/^(\*\*\*)$/,
    transform: 	(transform, e, data, matches) => {
      return transform
      	.setBlock({ type: "divider", isVoid: true })
      	.collapseToEndOfNextBlock()
      	.collapseToEndOfNextBlock() // page break
    }
  }),
  AutoReplace({
    trigger: 		"space",
    before: 		/^(#)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "heading" }) // title
    }
  }),
  AutoReplace({
    trigger: 		"enter",
    before: 		/.+/,
    onlyIn:			"heading",
    transform: 	(transform, e, data, matches) => {
    	let title = toTitleCase(matches.before[0])
      return transform.deleteBackward(title.length).insertText(title)
      	.splitBlock()
      	.setBlock({ type: "paragraph" }) // Title Case Header the After Next Line Key
    }
  }),
  AutoReplace({
    trigger: 		"backspace",
    after: 			/./,
    onlyIn:			"heading",
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "paragraph" }) // cancel title
    }
  }),

  // auto format rules
  AutoReplace({
    trigger: 		/(")/,
    before: 		/[^ ”]$/,
    transform: 	(transform, e, data, matches) => {
      return transform.insertText("”") // smart double quote
    }
  }),
  AutoReplace({
    trigger: 		/(")/,
    before: 		/(^)|[ ]$/,
    transform: 	(transform, e, data, matches) => {
      return transform.insertText("“") // smart double quote
    }
  }),
  AutoReplace({
    trigger: 		/(')/,
    before: 		/[^ ”]$/,
    transform: 	(transform, e, data, matches) => {
      return transform.insertText("’") // smart single quote
    }
  }),
  AutoReplace({
    trigger: 		/(')/,
    before: 		/(^)|[ ]$/,
    transform: 	(transform, e, data, matches) => {
      return transform.insertText("‘") // smart single quote
    }
  }),
  AutoReplace({
    trigger: 		"space",
    before: 		/[ ]$/,
    transform: 	(transform, e, data, matches) => {
      return // no double-space
    }
  }),
  AutoReplace({
    trigger: 		"space",
    before: 		/( -)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.insertText(" — ") // mdash
    }
  }),
  AutoReplace({
    trigger: 		"space",
    before: 		/(\.\.\.)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.insertText("… ") // elipsis
    }
  }),

  // special editor menu for quote
	EditBlockquote({
		type: 				"quote",
		typeDefault: 	"paragraph",
	}),

	// image inserter
	// see uploadRequest() in ../index for the other image insert option...
	// ...that will also need an upload tool connected.
	InsertImages({
    extensions: ["png", "jpeg"],
    applyTransform: (transform, file) => {
      return transform.insertBlock({
        type: "image",
        isVoid: true,
        data: { file, src: placeholder },
      }).apply()
    }
  }),


  // convenience plugins
  TrailingBlock({ type: "paragraph" }),

]
