// tools
import React from "react"
import { Raw } from "slate"

// composer initial state
export const initialState = Raw.deserialize({
  nodes: [
    {
      kind: "block",
      type: "paragraph",
      nodes: [
        {
          kind: "text",
          text: "🌠 You can drag-and-drop your image(s) here. Please add a caption to each (title, date, place, camera etc.) Make this a photo essay, image series, article or just a single photo submission."
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
		bold: props => <strong>{props.children}</strong>
	}
}