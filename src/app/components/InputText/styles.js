// styles
import { css } from "styled-components"

// components

// css
const inputReset = css`
	width: 			100%;
	border:			none;
	outline:		rgba(0,0,0,0);
	resize: 		none;
`
export const title = css`
	${ inputReset }
	${ props => props.theme.typography.title.auto }
	font-size: 	${ props => props.theme.size.font.make.larger }em;
	text-align: center;
`
export const subtitle = css`
	${ inputReset }
	${ props => props.theme.typography.title.auto }
	font-size: 	${ props => props.theme.size.font.make.larger / 2 }em;
	text-align: center;
`
