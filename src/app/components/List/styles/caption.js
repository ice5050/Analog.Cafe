// styles
import styled from "styled-components"

// components
import { StyledCaption } from "../../Caption/styles"


// css
export const ListCaption = styled(StyledCaption)`
	overflow: 			hidden;
	margin: 				0;
	margin-bottom: 	1.15em;
	height: 				${1.5 * 3 + 0.1}em;
	max-width: 			${ props => props.theme.size.block.column.maxwidth.m }px;
	.fonts-loaded & { height: ${1.5 * 3 - 0.2}em; }
	&::after, &::before { display: none; }
	${ props => props.theme.size.breakpoint.max.m`{
		&, .fonts-loaded & { 	height: auto !important; }
		overflow: 						visible;
		margin-top: 					.3em;
		margin-bottom: 				0;
	}` }
`
