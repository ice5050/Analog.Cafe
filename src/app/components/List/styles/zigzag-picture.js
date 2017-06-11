// styles
import styled from "styled-components"

// constants
import { zigzagWidth, zigzagTopShim } from "./ul"

// css
export const ListZigzagPicture = styled.figure`
	min-width: 						${ zigzagWidth };
	background-size: 			cover;
	background-position: 	center;
	margin: 							0 0 0 auto;
	${	props => props.theme.size.breakpoint.max.l` display: none; `}
	ul:first-child li:first-child & {
		margin-top: -${ zigzagTopShim + 4.5 }em;
	}
`
