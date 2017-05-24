// tools
import React from "react"
import PropTypes from "prop-types"
import toTitleCase from "titlecase"


// styles
import { PageHeader, PageTitle, PageSubtitle, PageByline, PageTools } from "./styles/header"
import { PageArticle, PageSection, PageBreak, PageHeading } from "./styles/section"
import { PageQuote } from "./styles/quote"

// return
export const Header = props => {
	return (
		<PageHeader>
			<PageTitle>{ 															toTitleCase( props.pageTitle )		}</PageTitle>
			{props.pageSubtitle ? 	<PageSubtitle>{ 	toTitleCase( props.pageSubtitle )	}</PageSubtitle> : null }
			{props.pageByline ? 		<PageByline>{ 		props.pageByline 									}</PageByline> : null }
			{props.pageTools ? 			<PageTools>{ 			props.children 										}</PageTools> : null }
		</PageHeader>
	)
}
export const Article = props => {
	return <PageArticle>{ props.children }</PageArticle>
}

export const Section = props => {
	return <PageSection>{ props.children }</PageSection>
}
export const SectionDivider = props => {
	return <PageBreak>✽ ✽ ✽</PageBreak>
}
export const SectionHeading = props => {
	return <PageHeading>{ props.children }</PageHeading>
}



export const Quote = props => {
	return (
		<PageQuote cite={ props.cite } textLength={ props.children.toString().length }>
			<p>{ props.children }</p>
			{ props.cite ? <cite>{ props.cite }</cite> : null }
		</PageQuote>
	)
}

// declare
Header.propTypes = {
	pageTitle: 		PropTypes.string.isRequired,
	pageSubtitle: PropTypes.string,
	pageByline: 	PropTypes.string,
	children: 		PropTypes.element,
}
SectionHeading.propTypes = {
	children: 		PropTypes.any.isRequired,
}
Section.propTypes = {
	children: 		PropTypes.any.isRequired,
}
Article.propTypes = {
	children: 		PropTypes.any.isRequired,
}
Quote.propTypes = {
	children: 		PropTypes.any.isRequired,
	pageSubtitle: PropTypes.string,
}