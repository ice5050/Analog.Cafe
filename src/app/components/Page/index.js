// tools
import React from "react"
import toTitleCase from "titlecase"


// styles
import { PageHeader, PageTitle, PageSubtitle, PageByline, PageTools } from "./styles/header"
import { PageArticle, PageSection, PageBreak } from "./styles/section"
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
export const SectionTitle = props => {
	return <PageSubtitle>{ props.children }</PageSubtitle>
}
export const SectionDivider = props => {
	return <PageBreak>✽✽✽</PageBreak>
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
	pageTitle: 		React.PropTypes.string.isRequired,
	pageSubtitle: React.PropTypes.string,
	pageByline: 	React.PropTypes.string,
	children: 		React.PropTypes.element,
}
Section.propTypes = {
	children: 		React.PropTypes.any.isRequired,
}
Article.propTypes = {
	children: 		React.PropTypes.any.isRequired,
}
Quote.propTypes = {
	children: 		React.PropTypes.any.isRequired,
	pageSubtitle: React.PropTypes.string,
}