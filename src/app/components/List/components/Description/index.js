// tools
import React from "react"
import PropTypes from "prop-types"


// styles
import { ListDescription } from "./styles"

// return
export const Description = props => {
	return (
		<ListDescription { ...props.emoji } >
			<span><q><em>{ props.children }</em></q> { props.emoji }</span>
		</ListDescription>
	)
}

// declare
ListDescription.propTypes = {
	children: 		PropTypes.element,
	emoji: 				PropTypes.string,
}