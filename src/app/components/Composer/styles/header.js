// styles
import styled, { css } from "styled-components"

// css
const input = css`
	text-align: 			center;
	width: 				100%;
	border:						none;
	outline:	rgba(0,0,0,0);
`
export const PageTitle = styled.input`
	${ props => props.theme.typography.title.auto }
	font-size: ${ props => props.theme.size.font.make.larger }em;
	${ input }
`
export const PageSubtitle = styled.input`
	${ props => props.theme.typography.title.auto }
	font-size: ${ props => props.theme.size.font.make.larger / 2 }em;
	${ input }
`