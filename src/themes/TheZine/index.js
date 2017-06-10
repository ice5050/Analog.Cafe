// tools
import React from "react"
import PropTypes from "prop-types"

// styles
import { ThemeProvider } from "styled-components"
import { ThemeGlobals } from "./styles/styles"
import "sanitize.css/sanitize.css"

// theme
import { TheZineTheme } from "./theme"
import { loadFonts } from "./helpers/font-loader"

// fonts
loadFonts()

// render
export const TheZine = (props) => {
	return (
			<ThemeProvider theme={ TheZineTheme } >
				<ThemeGlobals>{ props.children }</ThemeGlobals>
			</ThemeProvider>
	)
}

// declare
TheZine.propTypes = {
	children: PropTypes.array.isRequired,
}