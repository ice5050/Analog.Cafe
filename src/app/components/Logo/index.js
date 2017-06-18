// tools
import React from "react"

// styles
import { LogoOutline, LogoWithDownstate } from "./styles"

// render
export default props => {
	return(
		<LogoOutline {...props} title={"Analog.Cafe"} >
			<LogoWithDownstate {...props} />
		</LogoOutline>
	)
}
