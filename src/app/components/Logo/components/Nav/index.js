// tools
import React from "react"

// styles
import { LogoOutline, LogoWithDownstate } from "./styles.js"

// render
export const NavLogo = props => {
	return(
		<LogoOutline {...props} title={"Analog.Cafe"} >
			<LogoWithDownstate {...props} />
		</LogoOutline>
	)
}