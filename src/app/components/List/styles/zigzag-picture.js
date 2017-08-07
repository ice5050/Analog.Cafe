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

	border-top: ${ props => props.theme.elements.thickBorder };
	li:last-child & {
		border-bottom: ${ props => props.theme.elements.thickBorder };
	}
	${'' /* li:first-child & {
		border-top-width: calc(4.85em + ${ props => props.theme.size.block.border }px);
	} */}
`
