// tools
import React from "react"
import { Raw } from "slate"

// plugins
import { MarkHotkey } from "./plugins"


// composer initial state
export const composerInputPlaceholders = {
	"title": "Write Your Title Here ✍",
	"subtitle": "Subtitle (Optional)",
	"bodyTextRanges": [
		{
			kind: "range",
			text: "🌠 You can drag-and-drop your image(s) here. Please add a caption to each (title, date, place, camera etc.) "
		},
		{
			kind: "range",
			text: "Make this a photo essay, image series, article or just a single photo submission.",
			marks: [{
				kind: "mark",
				type: "bold"}
			]
		}
	]
}

export const initialState = Raw.deserialize({
  nodes: [
    {
      kind: "block",
      type: "paragraph",
      nodes: [
        {
          kind: "text",
          ranges: composerInputPlaceholders.bodyTextRanges
        }
      ]
    }
  ]
}, { terse: true })

// state schema
export const stateSchema = {
	nodes: {
		code: props => <pre {...props.attributes}><code>{props.children}</code></pre>
	},
	marks: {
		bold: props => <strong>{props.children}</strong>,
		code: props => <code>{props.children}</code>,
		italic: props => <em>{props.children}</em>,
		strikethrough: props => <del>{props.children}</del>,
		underline: props => <u>{props.children}</u>,
	}
}

// plugins list
export const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: 'c', type: 'code', isAltKey: true }),
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: 'd', type: 'strikethrough' }),
  MarkHotkey({ key: 'u', type: 'underline' })
]