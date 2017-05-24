// tools
import { Raw } from "slate"

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