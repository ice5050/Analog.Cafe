// styles
import styled from "styled-components"

// css
const blockSafety = props => props.theme.size.block.column.safety
const blockSpacing = props => props.theme.size.block.spacing
const posterDimensions = {
	width: "5em",
	height: "9em"
}

export const ListUl = styled.ul`
	${ props => props.theme.typography.text.auto };
	margin: 				0 auto;
	max-width: 			${ props => props.theme.size.breakpoint.stops.max }px;
	padding: 				0;
	position: 			relative;

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
				h2 { background: 0 0; }
				&::after { }
			}
			&::before { }
			&:active::before { visibility: hidden; }
		}
		section {
			max-width: 				61.5%;
			letter-spacing: 	initial;		
			padding: 					calc(${ blockSafety }em * 3) ${ blockSafety }em ${ props => props.theme.size.block.spacing }em ${ blockSafety }em;
			
			${	props => props.theme.size.breakpoint.max.l`
					max-width: 	100%;
					overflow: 	hidden;
				`
			}
			& > figure {
				float: 			left;
				width: 			${ posterDimensions.width };
				height: 		${ posterDimensions.height };
				margin: 		0 ${ blockSpacing }em 0 0;
				overflow:		hidden;
				& > img {
					height:				140%;
					width: 				auto;
					margin-left:	-50%;
				}
			}
			h2 {
				${ props => props.theme.typography.title.auto }
				font-size: 				${ props => props.theme.size.font.make.larger / 1.5 }em;
				display: 					inline-block;
				padding: 					0 0 .15em;
				margin-top: 			-0.2em;
				margin-bottom: 		-0.15em;
				overflow: 				hidden;
				white-space: 			nowrap;
				text-overflow: 		ellipsis;
				max-width: 				calc(100% - ${ props => props.theme.size.block.column.safety * 2 });
			}
			& > span {
				display: 				block;
				overflow: 			hidden;
				margin: 				0;
				margin-bottom: 	1.15em;
				height: 				#{1.5em * 3 + 0.1em};
				max-width: 			${ props => props.theme.size.block.column.maxwidth.m }px;

				.fonts-loaded & { height: ${1.5 * 3 - 0.2}em; }
				&::after, &::before { display: none; }

						
			}
		}
	}
	
`

// ${ StyledCaption }
// 				display: block;
// 				margin: 0;
// 				height: #{1.5em * 3 + 0.1em};
// 				.fonts-loaded & { height: #{1.5em * 3 - 0.2em}; }
// 				margin-bottom: 	1.15em;
// 				overflow: hidden;
// 				max-width: $size-column--maxwidth-m;
// 				text-align: justify;
// 				&::after, &::before { display: none; }
// 				@include breakpoint($toc-breakpoint-s) {
// 					&, .fonts-loaded & { height: auto; }
// 					overflow: visible;
// 					margin-top: .3em;
// 					margin-bottom: 0;
// 				}		
				
				
				
// 				${ props => props.theme.typography.title.auto }
// 				font-size: ${ props => props.theme.size.font.make.larger / 2 }em;

// 				@include breakpoint($toc-breakpoint-s) {
// 					display: block;
// 					white-space: normal;
// 					margin-top: 0.025em;
// 					line-height: 1.185em;
// 				}
