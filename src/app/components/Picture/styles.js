// tools
import { Picture } from "react-responsive-picture"

// styles
import styled, { css } from "styled-components"
import Color from "color"
import { Caption as PictureCaption, CaptionStyles } from "../CaptionStyles"


// css
export const Image = styled(Picture)`
	width: 		100%;
  display: 	block;
`

const shadow = css`
	box-shadow: 0 0 .5em ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string() };
`
const bleed = css`
	float:					none;
	margin-left: 		-${ props => props.theme.size.block.column.safety }em;
	margin-right: 	-${ props => props.theme.size.block.column.safety }em;
	width: 					100vw !important;
	max-width: 			100vw !important;
	box-shadow: 		none;
	border-radius: 	0;

	${ props => props.theme.size.breakpoint.min.l`padding-top: ${ props => props.theme.size.block.spacing }em;`}

	${ props => props.feature ? props => props.theme.size.breakpoint.min.l`
		margin-left:	calc(( -100vw + ${ props => props.theme.size.block.column.maxwidth.m }px )/2 - ${ props => props.theme.size.block.column.safety }em );
	`
	: null }
	${ props => props.feature ? props => props.theme.size.breakpoint.min.xxl`
		margin-left:	calc(( -100vw + ${ props => props.theme.size.block.column.maxwidth.l }px )/2 - ${ props => props.theme.size.block.column.safety }em );
	`
	: null }
`
export const Figure = styled.figure`
	padding: 				0;
	overflow: 			hidden;
	margin: 				0;
	position: 			relative;
	z-index: 				${ props => props.theme.layer.up };
	width: 					85%;
	margin-left: 		-${ props => props.theme.size.block.column.maxwidth.m / 4 }px;
	margin-right: 	${ props => props.theme.size.block.spacing }em;
	float: 					left;
	background:			${ props => props.theme.color.background };
	${'' /* border-radius:	${ props => props.theme.effects.borderRadius.small }em; */}

	${ shadow }

	${ props => props.theme.size.breakpoint.min.xxl`
		width: 				95%;
		margin-left: 	-${ props => props.theme.size.block.column.maxwidth.l / 2.75 }px;
		margin-right: ${ props => props.theme.size.block.spacing }em;
	` }

	${ props => !props.feature && props.theme.size.breakpoint.max.l`
		//--> Larger figure borders (for figures that aren't featured and are on mobile screens)
		float: none;
		margin: ${ props=> props.theme.size.block.column.safety }em 0 0 !important;
		width: 75% !important;
		max-width: 66vw !important;
		min-width: ${ props => props.theme.size.block.minFigureWIdth }px;
	`}

	${ props => props.feature ? bleed : props => props.theme.size.breakpoint.max.s`
		${ bleed }
		//--> Non-featured figures on small screens are not edge-to-edge:
		width: 100% !important;
		max-width: 100vw !important;
		min-width: 0;
		${ shadow }
	`}



	&.focus {
		box-shadow:	0 -${ props => props.theme.size.block.border }px 0 ${ props => props.theme.color.highlight },
								0 ${ props => props.theme.size.block.border }px 0 ${ props => props.theme.color.highlight };
		z-index: 		${ props => props.theme.layer.up + 1 };
	}

	textarea {
		${ CaptionStyles }
	}
`

const captionBlock = css`
	${ props => props.theme.size.breakpoint.min.l`
		margin: 0 auto;
		${ props => props.theme.size.breakpoint.min.s`
			max-width:	 ${ props => props.theme.size.block.column.maxwidth.m }px;
		` }
		${ props => props.theme.size.breakpoint.min.xxl`
			max-width:	 ${ props => props.theme.size.block.column.maxwidth.l }px;
		` }
	` }
`
export const Caption = styled(PictureCaption)`
	padding:				${ props => props.theme.size.block.column.safety / props.theme.size.font.make.smaller }em;
	border-bottom:	${ props => props.theme.elements.thickBorder };

	${ props => props.feature && captionBlock }
`
export const Byline = styled.div`
	${'' /* ${ props => props.composer && `opacity: .5;` } */}
`
