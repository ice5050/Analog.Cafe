// tools
import styled, { css } from "styled-components"

// css
export const CaptionStyles = css`
	${ props => props.theme.typography.text.auto }
	${ props => props.theme.size.font.auto }

	display: 			block;
	font-size: 		${ props => props.theme.size.font.make.smaller }em !important;
	line-height: 	${ props => props.theme.size.font.make.smaller * 1.8 }em;
	font-variant: small-caps;
	text-align: 	justify;
	padding:			0;

	& a {
		font-variant: normal;
		font-style: italic;
	}
`
export const Caption = styled.div`${ CaptionStyles }`
