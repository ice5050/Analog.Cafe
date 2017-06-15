// tools
import React from "react"
import PropTypes from "prop-types"


// styles
import { ListDescription, BrandName } from "./styles"

// return
export const Description = props => {
	return (
		<ListDescription { ...props } >
			<BrandName>Analog.Cafe</BrandName>{ props.children }
		</ListDescription>
	)
}

// declare
ListDescription.propTypes = {
	children: 		PropTypes.any,
	emoji: 				PropTypes.string,
}