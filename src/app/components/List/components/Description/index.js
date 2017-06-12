// tools
import React from "react"
import PropTypes from "prop-types"


// styles
import { ListDescription, BrandName } from "./styles"

// return
export const Description = props => {
	return (
		<ListDescription { ...props.emoji } >
			<BrandName>Analog.Cafe</BrandName>
			<span><q><em>{ props.children }</em></q> { props.emoji }</span>
		</ListDescription>
	)
}

// declare
ListDescription.propTypes = {
	children: 		PropTypes.element,
	emoji: 				PropTypes.string,
}