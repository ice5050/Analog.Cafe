// tools
import React from "react"

// styles
import styled, { ThemeProvider } from "styled-components"
import "sanitize.css/sanitize.css"

// theme
import { def } from "./theme"
import { loadFonts } from "./fonts"

const ThemeGlobals = styled.div`
	a {
		color: 						inherit;
		&:active {
			background: 	${ def.color.highlight };
			color: 				${ def.color.foreground };
		}
	}
	*::selection {
		background: ${ def.color.highlight };
	}
`

// fonts
loadFonts()

// render
export const TheZine = (props) => {
	return (
			<ThemeProvider theme={ def } >
				<ThemeGlobals>{ props.children }</ThemeGlobals>
			</ThemeProvider>
	)
}

// declare
TheZine.propTypes = {
	children: React.PropTypes.element.isRequired,
}