// styles
import { css } from "styled-components"
import Color from "color"


// css
const base = css`
	font-size: 		${ props => props.theme.size.font.make.smaller }em;
	font-style: 	italic;
	position: 			relative;
	margin: 				${ props => props.theme.size.block.spacing }em 
										-${ props => props.theme.size.block.column.safety * 1.16666666666666666 }em;
	overflow: 			hidden;
  clear: 					both;
	padding: 				${ props => props.theme.size.block.column.safety * 2 }em ${ props => props.theme.size.block.column.safety }em;
	border-top:			${ props => props.theme.elements.thickBorder };
	border-bottom:	${ props => props.theme.elements.thickBorder };
`
const content = css`
	&:not(.focus){
		:first-of-type:first-letter {
			font-size: 		${ props => props.theme.size.font.make.larger * 2 }em;
			font-style: 	normal;
			font-weight: 	700;
			float: 				left;
			margin: 			.3em .075em .075em 0;
			::selection {
				background: ${ props => props.theme.color.highlight };
			}
		}
		${	props => props.theme.size.breakpoint.min.l`
				column-count: 2;
				column-gap: ${ props => props.theme.size.block.column.safety * 2 }em;
			`
		}
	}
	&.focus {
		background:		${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least / 4).string() };
	}
	p { margin: 0 }
`
const marks = css`
  &::before,
  &::after {
		content: 			"“";
    display: 			block;
    position: 		absolute;
    top: 					${ props => props.theme.size.block.spacing / 4 }em;
    left: 				0;
    font-size: 		${ props => props.theme.size.font.make.larger * 2 }em;
    opacity: 			${ props => props.theme.opacity.least };
    font-weight:	700;
  }
  &::after {
		content: 			"”";
    top: 					initial;
    left: 				initial;
    bottom: 			-${ props => props.theme.size.block.spacing / 5 }em;
    right: 				0;
  }
  &.focus::before {
  	content:		"Edit Quote:";
  	font-size: 	${ props => props.theme.size.font.make.larger }em;
  }
`
export const Quote = css`
	${ base }
	${ content }
	${ marks }
`


// const cite = css`
// 	font-size: 			${ props => props.theme.size.font.make.smaller }em;
// 	font-style: 		normal;
// 	font-variant: 	small-caps;
// 	position: 			absolute;
// 	bottom: 				0;
// 	right:					${ props => props.theme.size.block.column.safety * 2 }em;
// 	&::before {
// 		content: "— ";
// 	}
// `
