// styles
import styled from "styled-components"
import Color from "color"

// components
import { Logo } from "../../../Logo"

// css
export const LogoOutline = styled.div`
	${ props => props.theme.size.font.auto }
	${ props => props.theme.typography.title.auto }
	position: 								${ props => props.stamp ? "relative" : "absolute" };
	top: 											${ props => (props.theme.size.block.column.safety) / 2 }em;
	left: 										calc(50% - ${ props => props.theme.size.font.make.larger - (props.theme.size.block.spacing / 2) }em);
	z-index: 									${ props => props.theme.layer.up };
	padding: 									${ props => props.theme.size.block.spacing }em;
	/* border-radius: 						${ props => props.theme.size.font.make.larger }em; */
	width:										5em;
	
	a.active & {
  	// box-shadow: 0 0 0 1px ${ props => props.theme.color.foreground };
  }
`

const mutedForeground = props => Color(props.theme.color.foregrond).alpha(props.theme.opacity.half / 2).string()
const mutedBrand = props => Color(props.theme.color.brand).alpha(props.theme.opacity.most / 2).string()
export const LogoLettering = styled.div`
	${ props => props.theme.typography.title.auto }
	font-size: 					0.35em;
	text-transform: 		uppercase;
	position: 					absolute;
	transform-origin: 	4.35em 4.5em;
	transform: 					rotate(-105deg);
	color: 							${ mutedForeground };
	z-index: 						${ props => props.theme.layer.up };
	
	
	a.active & {
		transform: 				rotate(75deg);
		transform-origin: 4.5em 4.25em;
		color: 						${ mutedBrand };
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
	background: ${ props => props.stamp ? props.theme.color.brand : props => props.theme.color.foreground };
  a.active & {
  	background: ${ props => props.theme.color.brand };
  }
  a:active & {
  	background: ${ props => Color(props.theme.color.brand).darken(props.theme.opacity.half).string() };
  }

`