// styles
import styled, { css } from "styled-components"

// css
const paragraph = css`
	display: 		inline;
	&::after, &:first-of-type::before {
		display: 		block;
		height: 		${ props => props.theme.size.block.spacing }em;
		content: 		"";
	}
`
export const PageSection = styled.section`
	${ props => props.theme.size.font.auto }
	${ props => props.theme.typography.text.auto }
	
	margin: 		0 auto;
	max-width: 	${ props => props.theme.size.block.column.maxwidth.m }px;
	${ props => props.theme.size.breakpoint.min.xxl`max-width: ${ props => props.theme.size.block.column.maxwidth.l }px;` };
	padding: 		0 ${ props => props.theme.size.block.column.safety }em;
	
	&::after {
		content: 		"";
		clear: 			both;
		display: 		block;
	}
	
	p						{ ${ paragraph } }
`
export const PageArticle = styled.article``