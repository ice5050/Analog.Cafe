// components
import { MarkHotkey } from "./mark-hotkey"
import AutoReplace from "slate-auto-replace"
import EditBlockquote from "slate-edit-blockquote"

// export
export const plugins = [
	// hot keys
  MarkHotkey({ 	key: "b", 			type: "bold" }),
  MarkHotkey({ 	key: "i", 			type: "italic" }),
  // convert markers to html
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
      return transform.setBlock({ type: "divider" })
    }
  }),
  AutoReplace({
    trigger: 		"space",
    before: 		/^(\#)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "heading" })
    }
  }),
  // special editor menu for quote
	EditBlockquote({
		type: 				"quote",
		typeDefault: 	"paragraph",
	}),
]