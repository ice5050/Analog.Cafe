// styles
import styled from "styled-components"

// components
import { Caption as ListCaption } from "../../CaptionStyles"

// css
export const Caption = styled(ListCaption)`
	display: 				block !important;
	overflow: 			hidden;
	margin: 				0;
	margin-bottom: 	.7em;
	height: 				${1.5 * 3 + 0.1}em;
	max-width: 			${props => props.theme.size.block.column.maxwidth.m}px;

	.fonts-loaded & {
		height: ${1.5 * 3 + 0.1}em;
		${props => props.status === "loading" && `height: 4em;`}
	}

	&::after, &::before { display: none; }
	-webkit-mask-image: linear-gradient(155deg, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 98%);
	mask-image: linear-gradient(155deg, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 98%);

	${props => props.theme.size.breakpoint.max.m`{
		&, .fonts-loaded & {
			height: auto !important;
		}
		overflow: 						visible;
		margin-top: 					.3em;
		margin-bottom: 				0;
	}`}
`
