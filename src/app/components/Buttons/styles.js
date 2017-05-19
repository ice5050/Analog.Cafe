// tools
import { Link, IndexLink } from "react-router"

// styles
import styled from "styled-components"
import Color from "color"


// css
export const PabeButtonLink = styled(Link)`
	max-width: 	${ props => props.theme.size.breakpoint.stops.min }px;

	${ props => props.theme.size.font.auto }
	${ props => props.theme.typography.title.auto }

	margin: 					0 auto;
	text-decoration: 	none;
 	text-align: 			center;
 	display: 					block;
 	background: 			${ props => props.theme.color.backgorund };
 	border-radius: 		${ props => props.theme.effects.borderRadius.small }em;
	padding: 					${ props => props.theme.size.block.spacing /1.25 }em 0;
	margin-top: 			${ props => props.theme.size.block.spacing }em;
	margin-bottom: 		${ props => props.theme.size.block.spacing }em;

	
	box-shadow: 			0 1px 1px ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least * 2).string() }
										, 0 0 0 1px ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string() };
	
	
	&.downstate {
		background: 		${ props => props.theme.color.foreground } !important;
		box-shadow: 		0 0 ${ props => props.theme.color.foreground } inset;
		color: 					${ props => props.theme.color.background } !important;
	}
	
	${ props => props.theme.size.breakpoint.max.xs`
		width: 100vw;
		max-width: 100vw;
		border-radius: 0;
		section & {
			margin-left: -${ props => props.theme.size.block.column.safety }em;em;
		}
	`
	}


// 	.card & {
// 		max-width: 100%;
// 		margin: 0;
// 		border-radius: 0;
// 		#{$tap-this} {
// 			box-shadow: 0 -1px 0 $color-foreground;
// 		}
// 	}
// }

`
