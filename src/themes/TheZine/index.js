// tools
import React from "react"
import PropTypes from "prop-types"

// styles
import styled, { ThemeProvider } from "styled-components"
import "sanitize.css/sanitize.css"

// theme
import { def } from "./theme"
import { loadFonts } from "./fonts"

const ThemeGlobals = styled.div`
	color: ${ def.color.foreground };
	a {
		color: inherit;
		&:active {
			background: 	${ def.color.highlight };
			color: 				${ def.color.foreground };
		}
	}
	*::selection {
		background: ${ def.color.highlight };
	}
	a, button, textarea { -webkit-tap-highlight-color: rgba(0,0,0,0); }
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
	children: PropTypes.array.isRequired,
}