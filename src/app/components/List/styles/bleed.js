// styles
import styled from "styled-components"

import { zigzagTopShim } from "./ul"

// css
export const ListBleed = styled.div`
	${ props => props.theme.size.font.auto }
	width: 					100%;
	
	clear: 					both;
	position: 			relative;
	margin-top: 		calc(-${ zigzagTopShim }em - ${ props => props.theme.size.block.column.safety }em);
	margin-bottom:	${ props => props.theme.size.block.column.safety }em;
`
