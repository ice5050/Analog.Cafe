// tools
import React from "react"

// styles
import styled, { ThemeProvider } from "styled-components"
import "sanitize.css/sanitize.css"

// theme
import { def } from "./theme"
import { loadFonts } from "./fonts"

const ThemeGlobals = styled.div`
	// general resets:
	a {
		color: inherit;
		&, button {
			-webkit-tap-highlight-color: rgba(0,0,0,0);
		}
		&.downstate {
			background: 	${ def.color.highlight };
			color: 				${ def.color.foreground };
		}
	}
	*::selection {
		background: ${ def.color.highlight };
	}
	
	//Draft.js resets:
	.public-DraftEditorPlaceholder-root { position: absolute; z-index: ${ def.layer.tuck }; }
	.DraftEditorPlaceholder-hidden { display: none; }
	.public-DraftEditor-content { height: 100vh; }
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