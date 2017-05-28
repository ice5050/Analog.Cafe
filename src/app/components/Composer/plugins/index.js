// components
import { MarkHotkey } from "./mark-hotkey"
import AutoReplace from "slate-auto-replace"
import EditBlockquote from "slate-edit-blockquote"

// export
export const plugins = [
  MarkHotkey({ 	key: "b", 			type: "bold" }),
  MarkHotkey({ 	key: "i", 			type: "italic" }),
	EditBlockquote({
		type: 				"quote",
		typeDefault: 	"paragraph",
	}),
  AutoReplace({
    trigger: 		"space",
    before: 		/^(>)$/,
    transform: 	(transform, e, data, matches) => {
      return transform.setBlock({ type: "quote" })
    }
  })
]