// tools

// styles
import styled from "styled-components"
import Color from "color"


// css
export const ButtonSection = styled.div`
	clear: both;
	overflow: hidden;
	margin: 0 -${ props => props.theme.size.block.column.safety }em 0;
	& > div {
		background: 		${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string() };
	  margin: 				${ props => props.theme.size.block.column.safety * 2 }em 0
										 ${ props => props.theme.size.block.spacing / 2 }em;
	  padding: 				${ props => props.theme.size.block.column.safety }em 0;
	  border-radius: 	${ props => props.theme.effects.borderRadius.small }em;

		${ props => props.theme.size.breakpoint.max.m`
			margin-bottom: 0;
			border-radius: 0;
		`
		}
	}


`
