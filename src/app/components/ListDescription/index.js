// tools
import React from "react"


// styles
import { ListDescription as ListDescriptionStyles, BrandName } from "./styles"
export { ListHeader } from "./styles"

// return
export const ListDescription = props => {
	return (
		<ListDescriptionStyles { ...props } >
			<BrandName>Analog.Cafe</BrandName>{ props.children }
		</ListDescriptionStyles>
	)
}
