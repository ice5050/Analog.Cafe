// styles
import styled from "styled-components"
import { Paper } from "../Paper"

// fonts
import { Exo2Latin600 } from "./fonts"
import { LoraLatin400 } from "typeface-lora"



// return
export default styled.div`
	color: ${ Paper.color.foreground };
	a {
		color: inherit;
		&:active {
			background: 	${ Paper.color.highlight };
			color: 				${ Paper.color.foreground };
		}
		text-decoration-skip: ink;
		-webkit-text-decoration-skip: ink;
	}
	*::selection {
		background: ${ Paper.color.highlight };
	}
	a, button, textarea { -webkit-tap-highlight-color: rgba(0,0,0,0); }

	${ Exo2Latin600 }
	${ LoraLatin400 }
`
