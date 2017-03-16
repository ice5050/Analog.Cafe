// styles
import styled, { css } from "styled-components"

// css
const base = css`
	position: 			relative;
	margin: 				${ props => props.theme.size.block.spacing }em -${ props => props.theme.size.block.column.safety }em;
	overflow: 			hidden;
  clear: 					both;
	padding: 				${ props => props.theme.size.block.column.safety * 2 }em ${ props => props.theme.size.block.column.safety }em;;
	border-top:			${ props => props.theme.elements.thickBorder };
	border-bottom:	${ props => props.theme.elements.thickBorder };

	${ props => props.textLength > 150 ? css`
		${	props => props.theme.size.breakpoint.min.l`
				column-count: 2;
				column-gap: ${ props => props.theme.size.block.column.safety * 2 }em;
		` }` : null }
`
// ^^ two-column quotes require 150 characters or more at the root
// vv paragraph tag (1) will be wrapped automatically around nested text
const paragraph = css`
	display: 			block;
	margin:				0;
	font-size: 		${ props => props.theme.size.font.make.smaller }em;
	font-style: 	italic;
	
	&::before,
	&::after,
	&:first-of-type::before {
		display: 	none;
	}
	&:first-of-type::first-letter {
		font-size: 		${ props => props.theme.size.font.make.larger * 2 }em;
		font-style: 	normal;
		font-weight: 	700;
		float: 				left;
		margin: 			.3em .075em .075em 0;
		::selection {
			background: ${ props => props.theme.color.highlight };
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
export const PageQuote = styled.blockquote`
					${ base }
	p 		{ ${ paragraph } 	}
	cite 	{ ${ cite } 			}
					${ marks }
`