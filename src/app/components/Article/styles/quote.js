// styles
import { css } from "styled-components"

// css
const base = css`
	position: 			relative;
	margin: 				${ props => props.theme.size.block.spacing }em 
										-${ props => props.theme.size.block.column.safety }em;
	overflow: 			hidden;
  clear: 					both;
	padding: 				${ props => props.theme.size.block.column.safety * 2 }em ${ props => props.theme.size.block.column.safety }em;
	border-top:			${ props => props.theme.elements.thickBorder };
	border-bottom:	${ props => props.theme.elements.thickBorder };
`
		
// vv paragraph tag (1) has to be be wrapped around nested text
const content = css`
	font-size: 		${ props => props.theme.size.font.make.smaller }em;
	font-style: 	italic;
	
	.first-letter {
		font-size: 		${ props => props.theme.size.font.make.larger * 2 }em;
		font-style: 	normal;
		font-weight: 	700;
		float: 				left;
		margin: 			.3em .075em .075em 0;
		::selection {
			background: ${ props => props.theme.color.highlight };
		}
	}
	&.columns {
		${	props => props.theme.size.breakpoint.min.l`
				column-count: 2;
				column-gap: ${ props => props.theme.size.block.column.safety * 2 }em;
			`
		}
	}
`
const cite = css`
	font-size: 			${ props => props.theme.size.font.make.smaller }em;
	font-style: 		normal;
	font-variant: 	small-caps;
	position: 			absolute;
	bottom: 				0;
	right:					${ props => props.theme.size.block.column.safety * 2 }em;
	&::before {
		content: "— ";
	}
`
const marks = css`
  &::before,
  &::after {
		content: 		"“";
    display: 		block;
    position: 	absolute;
    top: 				${ props => props.theme.size.block.spacing / 3 }em;
    left: 			0;
    font-size: 	${ props => props.theme.size.font.make.larger * 2 }em;
    opacity: 		${ props => props.theme.opacity.least };
  }
  &::after {
		content: 		"”";
    top: 				initial;
    left: 			initial;
    bottom: 		-${ props => props.theme.size.block.spacing / 4 }em;
    right: 			0;
  }
`
export const Quote = css`
						${ base }
						${ content }
	cite 		{ ${ cite } 			}
						${ marks }
`