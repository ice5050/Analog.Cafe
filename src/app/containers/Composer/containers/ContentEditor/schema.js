// tools
import React from "react"

// components
import Picture from "../../../Picture"
import Link from "../../../../components/Link"
import Placeholder from "./containers/Placeholder"


// return
export const schema = {
	nodes: {
		paragraph: 		props => <p
										{ ...props.attributes }
										style={{ position: "relative" }}
									>
										<Placeholder { ...props }>
											Add your images & write your story...
										</Placeholder>
										{ props.children }
									</p>,
		heading:			props => <h3>{ props.children }</h3>, // no links or style should be allowed in headings
		divider:			props => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const className = focus ? "focus" : "nofocus"
										return <hr className={ className } />
		},
		quote: 				props => {
										const { node, state } = props
										const focus = state.isFocused && state.selection.hasEdgeIn(node)
										const className = focus ? "focus" : "nofocus"
										return <blockquote { ...props.attributes } className={ className }>{ props.children }</blockquote>
		},
		image:	 			Picture,
    link: 				props => {
										const { data } = props.node
										const href = data.get("href")
										return <Link { ...props.attributes } to={ href }>{ props.children }</Link>
    },
	},
	marks: {
		bold: 			props => <strong>{ props.children }</strong>,
		italic: 		props => <em>{ props.children }</em>,
	},
}
