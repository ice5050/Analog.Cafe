// tools
import React from "react"
import { ThemeProvider } from "styled-components"

// styles
import ThemeGlobals from "./styles/globals"
import "sanitize.css/sanitize.css"

// theme
import { Paper } from "./theme"
import { loadFonts } from "./helpers/font-loader"

// fonts
loadFonts()

// render
export default props => {
	return (
			<ThemeProvider theme={ Paper } >
				<ThemeGlobals>{ props.children }</ThemeGlobals>
			</ThemeProvider>
	)
}
