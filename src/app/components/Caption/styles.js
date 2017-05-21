// styles
import styled from "styled-components"


// css
export const StyledCaption = styled.span`
	display: 			block;
	font-size: 		${ props => props.theme.size.font.make.smaller }em;
	line-height: 	${ props => props.theme.size.font.make.smaller * 1.8 }em;
	font-variant: small-caps;
	text-align: justify;
`