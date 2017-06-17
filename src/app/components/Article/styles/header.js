// styles
import styled from "styled-components"

// css
const blockSafety = props => props.theme.size.block.column.safety
export const PageHeader = styled.header`
	${ props => props.theme.size.font.auto }
	
	text-align: 		center;
	margin: 				${ blockSafety }em auto;
	max-width: 			${ props => props.theme.size.block.column.maxwidth.m }px;
	border-bottom:	${ props => props.theme.elements.thickBorder };
	padding: 				0 ${ blockSafety }em ${ blockSafety }em;

	
`
export const PageTitle = styled.h1`
	${ props => props.theme.typography.title.auto }
	font-size: ${ props => props.theme.size.font.make.larger }em;
`
export const PageSubtitle = styled.h2`
	${ props => props.theme.typography.title.auto }
	font-size: ${ props => props.theme.size.font.make.larger / 2 }em;
`
export const PageByline = styled.div`
	${ props => props.theme.typography.text.auto }
	font-size: 			${ props => props.theme.size.font.make.smaller }em;
	font-variant: 	small-caps;
	display: 				block;
	cursor: 				pointer;
	display: 				inline;
`
export const PageTools = styled.div`
	
`