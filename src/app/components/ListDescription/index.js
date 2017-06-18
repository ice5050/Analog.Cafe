// tools
import React from "react"


// styles
import { ListDescription, BrandName } from "./styles"

// return
export default props => {
	return (
		<ListDescription { ...props } >
			<BrandName>Analog.Cafe</BrandName>{ props.children }
		</ListDescription>
	)
}
