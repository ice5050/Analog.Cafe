// styles
import styled, { css } from "styled-components"

// tools
import { InputTitle } from "./InputTitle"

// css
const input = css`
	text-align: center;
	width: 			100%;
	border:			none;
	outline:		rgba(0,0,0,0);
	resize: 		none;
`
export const PageTitle = styled(InputTitle)`
	${ props => props.theme.typography.title.auto }
	font-size: ${ props => props.theme.size.font.make.larger }em;
	${ input }
`
export const PageSubtitle = styled(InputTitle)`
	${ props => props.theme.typography.title.auto }
	font-size: ${ props => props.theme.size.font.make.larger / 2 }em;
	${ input }
`