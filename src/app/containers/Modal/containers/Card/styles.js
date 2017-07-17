// tools
import styled from "styled-components"

// css
export const Overlay = styled.div`
	position: 									fixed;
	overflow:										scroll;
	-webkit-overflow-scrolling: touch;
	top: 												0;
	bottom: 										0;
	left: 											0;
	right: 											0;
	z-index: 										${ props => props.theme.layer.card };
	padding:  									5vh 0;
`
