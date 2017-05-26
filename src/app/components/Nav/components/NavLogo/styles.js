// styles
import styled from "styled-components"
import Color from "color"

// components
import { Logo } from "../../../Logo"

// css
export const LogoOutline = styled.div`
	${ props => props.theme.size.font.auto }
	${ props => props.theme.typography.title.auto }
	position: 								fixed;
	top: 											${ props => (props.theme.size.block.column.safety) / 2 }em;
	left: 										calc(50% - ${ props => props.theme.size.font.make.larger - (props.theme.size.block.spacing / 2) }em);
	z-index: 									${ props => props.theme.layer.up };
	padding: 									${ props => props.theme.size.block.spacing }em;
	border-radius: 						${ props => props.theme.size.font.make.larger }em;
	background: 							${ props => Color(props.theme.color.background).alpha(props.theme.opacity.half).string() };
	box-shadow:								0 0 .5em ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string() };
	backdrop-filter: 					blur(5px);
	-webkit-backdrop-filter: 	blur(5px);
	
	a.active & {
  	// box-shadow: 0 0 0 1px ${ props => props.theme.color.foreground };
  }
`

export const LogoLettering = styled.div`
	${ props => props.theme.typography.title.auto }
	font-size: 					0.35em;
	text-transform: 		uppercase;
	position: 					absolute;
	transform-origin: 	4.275em 4.225em;
	transform: 					rotate(0deg);
	color: 							${ props => props.theme.color.foreground };
	z-index: 						${ props => props.theme.layer.up };
	
	a.active & {
		transform: 				rotate(80deg);
	}
	
	span {
		display: 						block;
		position:	 					absolute;
		width: 							1em;
		height: 						1em;
		left: 							4em;
		top: 								10em;
		text-align: 				center;
		transform-origin: 	0.5em -5.5em;
	}
	
`

export const LogoWithDownstate = styled(Logo)`
	background: ${ props => props.theme.color.foreground };
  a.active & {
  	background: ${ props => props.theme.color.brand };
  }
  a:active & {
  	background: ${ props => Color(props.theme.color.brand).darken(props.theme.opacity.half).string() };
  }

`