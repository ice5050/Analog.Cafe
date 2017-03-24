// styles
import styled from "styled-components"
import Color from "color"

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
	box-shadow: 							0 0 0 1px ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.half / 2).string() };
	backdrop-filter: 					blur(5px);
	-webkit-backdrop-filter: 	blur(5px);
	
	a.active & {
		color: 			${ props => props.theme.color.foreground };
    box-shadow: 0 0 0 1px , 0 0 0 0.95em inset;
  }
  a.downstate & {
  	 background: ${ props => props.theme.color.highlight }
  }
`

export const LogoLettering = styled.div`
	${ props => props.theme.typography.title.auto }
	font-size: 					0.35em;
	text-transform: 		uppercase;
	position: 					absolute;
	transform-origin: 	4.275em 4.225em;
	transform: 					rotate(80deg);
	color: 							${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.half * 1.33).string() };
	z-index: 						${ props => props.theme.layer.up };
	
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
	
	a.active & {
    color:	${ props => props.theme.color.background };
  }
`