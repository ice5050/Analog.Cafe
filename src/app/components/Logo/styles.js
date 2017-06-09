// styles
import styled from "styled-components"
import Color from "color"


// css
const logoSize = props => props.theme.size.font.make.larger
const logoPadding = props => props.theme.size.block.spacing / 2
export const LogoContainer = styled.div`
	${ props => props.theme.size.font.auto }
	width:					${ logoSize }em;
	height:					${ logoSize }em;
	overflow: 			hidden;
	margin: 				0 auto;
	padding: 				${ logoPadding }em;
	border-radius: 	${ logoSize }em;
	
	svg {
		height: 100%;
		width: 	100%;
		path {
			fill: #fff;
		}
	}
`