// tools
import React from "react"
import { Raw } from "slate"

// nodes
function CodeNode(props) {
  return <pre {...props.attributes}><code>{props.children}</code></pre>
}

// composer initial state
export const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'Edit this text and past your images here.'
        }
      ]
    }
  ]
}, { terse: true })

// state schema
export const stateSchema = {
	nodes: {
		code: CodeNode
	}
}