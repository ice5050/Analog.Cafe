// styles
import styled, { css } from "styled-components"
import Color from "color"

// images
import zigzagImage from "./zigzag-mask.svg";


// css
const blockSafety = props => props.theme.size.block.column.safety
const blockSpacing = props => props.theme.size.block.spacing
const greyLine = props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string()

const posterDimensions = css`
	width: 	5.5em;
	height: 9.33em;
`
export const zigzagWidth = "33%"
export const zigzagTopShim = 10
const zigzagWidthShim = css`width: calc( ${ zigzagWidth } + 5px);`
const zigzagFill = css`
	position: absolute;
	right: 		0;
	top: 			0;
	bottom: 	0;

`
const zigzagDimensions = css`
	${ zigzagWidthShim }
	${ zigzagFill }
	display: 					block;
	content: 					"";
	z-index: 					${ props => props.theme.layer.up };
	pointer-events: 	none;
	${ props => props.theme.size.breakpoint.max.l`{ display: none !important; }` }
`

export const ListUl = styled.ul`
	
	/* placeholder style */	
	${ props => props.listStatus === "loading" ? `opacity: ` + props.theme.opacity.least + `;` : null }

	${ props => props.theme.typography.text.auto };
	position: 			relative;
	max-width: 			${ props => props.theme.size.breakpoint.stops.max }px;
	margin: 				0 auto;
	padding: 				0;
	&::after {
		${ zigzagDimensions }
		filter: 						drop-shadow(1px 0 0 ${ greyLine });
		background-size: 		100%;
		background-image: 	url(${ zigzagImage });
		background-repeat: 	repeat-y;
	}

	li {
		display: 			block;
		list-style: 	none;
		overflow: 		hidden;
		position: 		relative;
		
		& > a {
			display: 					flex;
			width: 						100%;
			text-decoration: 	none;
			&:active {
				background: 0 0;
				figure {
					box-shadow:	0 -${ props => props.theme.size.block.border }px 0 ${ props => props.theme.color.highlight },
						0 ${ props => props.theme.size.block.border }px 0 ${ props => props.theme.color.highlight };

				}
			}
			&::before {
				${ zigzagFill }
				display: 					block;
				content: 					"";
				z-index: 					${ props => props.theme.layer.up + 1};
				height: 					1px;
				width: 						100%;
				pointer-events: 	none;
				background: 			${ greyLine };
			}
			&:active::before { visibility: hidden; }
		}
		section {
			max-width: 				61.5%;
			letter-spacing: 	initial;		
			padding: 					calc(${ blockSafety }em * 3) ${ blockSafety }em ${ props => props.theme.size.block.spacing }em ${ blockSafety }em;
			${	props => props.theme.size.breakpoint.max.l`
				max-width: 	100% !important;
				overflow: 	hidden;
			`}
			& > figure {
				${ posterDimensions }
				float: 			left;
				margin: 		0 ${ blockSpacing }em 0 0;
				overflow:		hidden;
				& > img {
					height:				150%;
					width: 				auto;
					margin-left:	-50%;
				}
				${ props => props.theme.size.breakpoint.max.m`{
					margin-top: calc(${ blockSpacing }em / 2 + 0.1em);
					margin-bottom: 0;
				}` }
				
				/* placeholder style */	
				background-color: ${ props => props.listStatus === "loading" ? props.theme.color.foreground : greyLine };
			}
			h2 {
				${ props => props.theme.typography.title.auto }
				font-size:        ${ props => props.theme.size.font.make.larger / 1.5 }em;
				display: 					inline-block;
				padding: 					0 0 .15em;
				margin-top: 			-0.275em;
				margin-bottom: 		-0.15em;
				overflow: 				hidden;
				white-space: 			nowrap;
				text-overflow: 		ellipsis;
				max-width: 				calc(100% - ${ blockSafety}em * 2);
				${ props => props.theme.size.breakpoint.max.m`{
					display: block;
					white-space: normal;
					line-height: 1.185em;
				}` }
				
				/* placeholder style */	
				${ props => props.listStatus === "loading" ? `letter-spacing: 0 !important; font-size: 1.35em;` : null }
			}
			
			/* placeholder style */	
			${ props => props.listStatus === "loading" ? `& > span { word-break: break-all }` : null }
			
			& > div {
				max-width: 30em;
				${ props => props.theme.size.breakpoint.max.m`{
					width: 				calc(100vw - ${ blockSafety }em * 2);
					min-width: 		auto;
					padding-top:	${ blockSafety }em;
					float:				none;
					clear:				both;
				}` }
				${ props => props.theme.size.breakpoint.max.xs`{
					text-align: left;
				}`}
				
				& > span {
					/* placeholder style */	
					${ props => props.listStatus === "loading" ? `letter-spacing: 0 !important;` : null }
				}
				& > em {
					/* placeholder style */	
					${ props => props.listStatus === "loading" ? `font-style: normal;` : null }
				}
			}
			
		}
	}
	&:first-child li:first-child {
		padding-top: ${ zigzagTopShim }em;
		:before { display: none; }
	}
`
