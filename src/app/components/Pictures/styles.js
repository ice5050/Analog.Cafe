// tools
import { Picture } from "react-responsive-picture"
import { Caption } from "../Caption"


// styles
import styled from "styled-components"


// css
export const PictureImage = styled(Picture)`
	width: 100%;
  display: block;
`

export const PictureFigure = styled.figure`

	padding: 		0;	
	overflow: 	hidden;
	margin: 		0 0 ${ props => props.theme.size.block.spacing }em;
	z-index:		${ props => props.theme.layer.overlay };
	position: 	relative;

// 	
// 	@include breakpoint($size-breakpoint-s) {
// 		@include figure-bleed;
// 	}
// 	@include breakpoint($size-breakpoint-l) {
		width: 				77.5%; 
 		margin-left: 	calc((${ props => props.theme.size.block.column.maxwidth.m }px - 100vw)/3.5);
 		margin-right: ${ props => props.theme.size.block.spacing }em;
		float: 				left;
// 	}
// 	@include breakpoint($size-breakpoint-xxl) {
// 		width: 94%; 
// 		margin-left: -$size-column--maxwidth-m/2.15;
// 		margin-right: $size-content-block-spacing;
// 		float: left;
// 	}
`

export const PictureCaption = styled(Caption)`
	padding:				${ props => props.theme.size.block.column.safety / props.theme.size.font.make.smaller }em;
	border-bottom:	${ props => props.theme.elements.thickBorder };
	background:			${ props => props.theme.color.background };
`