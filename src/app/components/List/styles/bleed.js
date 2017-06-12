// styles
import styled from "styled-components"

import { zigzagWidth, zigzagTopShim } from "./ul"

// css
export const ListBleed = styled.div`
	${ props => props.theme.size.font.auto }
	width: 					100%;
	
	clear: 					both;
	position: 			relative;
	margin-top: 		-${ zigzagTopShim + 2 }em;
	margin-bottom:	${ props => props.theme.size.block.column.safety }em;
`
