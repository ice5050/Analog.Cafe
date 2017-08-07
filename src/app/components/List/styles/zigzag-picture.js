// styles
import styled from "styled-components"

// constants
import { zigzagWidth, zigzagTopShim } from "./ul"

// css
export const ZigzagPicture = styled.figure`
	min-width: 						${ zigzagWidth };
	background-size: 			cover;
	background-position: 	center;
	margin: 							0 0 0 auto;
	${	props => props.theme.size.breakpoint.max.l` display: none; `}
	ul:first-child li:first-child & {
		margin-top: -${ zigzagTopShim + 4.5 }em;
	}

	box-shadow: 0 8px 0 0px #2c2c2c inset, 0 calc(0.5em + 8px) 2em rgba(44, 44, 44, 0.5) inset;

	li:last-child & {
		box-shadow: 0 8px 0 0px #2c2c2c inset, 0 -8px 0 0px #2c2c2c inset, 0 calc(0.5em + 8px) 2em rgba(44, 44, 44, 0.5) inset;
	}
	li:first-child & {
		 box-shadow: 0 8px 0 0px #2c2c2c inset, 0 105px 0 0 #2c2c2c inset, 0 calc(0.5em + 8px) 2em rgba(44, 44, 44, 0.5) inset;
	}
`
