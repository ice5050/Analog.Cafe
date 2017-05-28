// styles
import styled from "styled-components"
import { TheZineTheme } from "./theme"


// export
export const ThemeGlobals = styled.div`
	color: ${ TheZineTheme.color.foreground };
	a {
		color: inherit;
		&:active {
			background: 	${ TheZineTheme.color.highlight };
			color: 				${ TheZineTheme.color.foreground };
		}
	}
	*::selection {
		background: ${ TheZineTheme.color.highlight };
	}
	a, button, textarea { -webkit-tap-highlight-color: rgba(0,0,0,0); }
`