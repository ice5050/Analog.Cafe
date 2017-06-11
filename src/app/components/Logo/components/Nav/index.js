// tools
import React from "react"

// styles
import { LogoOutline, LogoLettering, LogoWithDownstate } from "./styles.js"

// render
export const NavLogo = props => {
	// wrap individual letters in span & rotate accordingly
	const appName = "Analog●Cafe●"
	const appNameSpan = appName.split("").map((letter, i) =>
		<span style={{ transform: "rotate(-" + (i * 30) + "deg)" }} key={i}>{letter}</span>)
	//jsx
	return(
		<LogoOutline {...props} title={"Analog.Cafe"} >
			<LogoLettering>{appNameSpan}</LogoLettering>
			<LogoWithDownstate {...props} />
		</LogoOutline>
	)
}