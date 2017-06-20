// tools
import styled from "styled-components"


// css
export const Anchor = styled.a`
	text-decoration: 	none;
	&:active u {
		background:			${ props => props.theme.color.highlight };
	}
`
export const Wrapper = styled.div`
	display: 					inline;
	position:					relative;
	z-index: 					${ props => props.theme.layer.card };
`
