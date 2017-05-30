// tools
import { Picture } from "react-responsive-picture"
import { Caption } from "../Caption"


// styles
import styled, { css } from "styled-components"


// css
export const PictureImage = styled(Picture)`
	width: 		100%;
  display: 	block;
`

const bleed = css`
	float:					none;
	margin-left: 		-${ props => props.theme.size.block.column.safety }em;
	margin-right: 	-${ props => props.theme.size.block.column.safety }em;
	width: 					100vw;
	max-width: 			100vw;
	
	${ props => props.feature ? props => props.theme.size.breakpoint.min.l`
		margin-left:	calc(( -100vw + ${ props => props.theme.size.block.column.maxwidth.m }px )/2 - ${ props => props.theme.size.block.column.safety }em );
	`
	: null }
	${ props => props.feature ? props => props.theme.size.breakpoint.min.xxl`
		margin-left:	calc(( -100vw + ${ props => props.theme.size.block.column.maxwidth.l }px )/2 - ${ props => props.theme.size.block.column.safety }em );
	`
	: null }
`
export const PictureFigure = styled.figure`

	padding: 		0;	
	overflow: 	hidden;
	margin: 		0 0 ${ props => props.theme.size.block.spacing }em;
	z-index:		${ props => props.theme.layer.up + 1 };
	position: 	relative;

	width: 				65%; 
	margin-left: 	calc((${ props => props.theme.size.block.column.maxwidth.m }px - 100vw)/3.5);
	margin-right: ${ props => props.theme.size.block.spacing }em;
	float: 				left;

	${ props => props.theme.size.breakpoint.min.xl`
		width: 				85%;
		margin-left: 	-${ props => props.theme.size.block.column.maxwidth.m / 4 }px;
		margin-right: ${ props => props.theme.size.block.spacing }em;
	` }
	
	${ props => props.theme.size.breakpoint.min.xxl`
		width: 				95%;
		margin-left: 	-${ props => props.theme.size.block.column.maxwidth.l / 2 }px;
		margin-right: ${ props => props.theme.size.block.spacing }em;
	` }
	
	${ props => props.feature ? bleed : props => props.theme.size.breakpoint.max.m` ${ bleed } ` }	
	
	&.focus {
		box-shadow:	0 -${ props => props.theme.size.block.border }px 0 ${ props => props.theme.color.highlight },
								0 ${ props => props.theme.size.block.border }px 0 ${ props => props.theme.color.highlight };
	}
`

const captionBlock = css`
	${ props => props.theme.size.breakpoint.min.xl`
		margin: 0 auto;
		${ props => props.theme.size.breakpoint.min.s`
			max-width:	 ${ props => props.theme.size.block.column.maxwidth.m }px;
		` }
		${ props => props.theme.size.breakpoint.min.xxl`
			max-width:	 ${ props => props.theme.size.block.column.maxwidth.l }px;
		` }
	` }
`
export const PictureCaption = styled(Caption)`
	padding:				${ props => props.theme.size.block.column.safety / props.theme.size.font.make.smaller }em;
	border-bottom:	${ props => props.theme.elements.thickBorder };
	background:			${ props => props.theme.color.background };
	
	${ props => props.feature ? captionBlock : null }
`