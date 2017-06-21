// styles
import { css } from "styled-components"

// components

// css
export const reset = css`
	width: 			100%;
	border:			none;
	outline:		rgba(0,0,0,0);
	resize: 		none;
`
export const title = css`
	${ reset }
	${ props => props.theme.typography.title.auto }
	font-size: 	${ props => props.theme.size.font.make.larger }em;
	text-align: center;
`
export const subtitle = css`
	${ reset }
	${ props => props.theme.typography.title.auto }
	font-size: 	${ props => props.theme.size.font.make.larger / 2 }em;
	text-align: center;
`
