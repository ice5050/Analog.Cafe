// tools
import { Picture } from "react-responsive-picture"
import { Caption } from "../Caption"


// styles
import styled from "styled-components"


// css
export const PictureImage = styled(Picture)`
	width: 		100%;
  display: 	block;
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

	${ props => props.theme.size.breakpoint.max.m`
		margin-left: 		-${ props => props.theme.size.block.column.safety }em;
		margin-right: 	-${ props => props.theme.size.block.column.safety }em;
		width: 					100vw;
		max-width: 			100vw;
	` }

`

export const PictureCaption = styled(Caption)`
	padding:				${ props => props.theme.size.block.column.safety / props.theme.size.font.make.smaller }em;
	border-bottom:	${ props => props.theme.elements.thickBorder };
	background:			${ props => props.theme.color.background };
`