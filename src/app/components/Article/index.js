// tools
import React from "react"
import PropTypes from "prop-types"
import toTitleCase from "titlecase"


// styles
import { PageHeader, PageTitle, PageSubtitle, PageByline } from "./styles/header"
import { PageArticle, PageSection } from "./styles/section"

// return
export const Header = props => {
	return (
		<PageHeader>
			<PageTitle>{ 															toTitleCase( props.pageTitle )		}</PageTitle>
			{ props.pageSubtitle ? 	<PageSubtitle>{ 	toTitleCase( props.pageSubtitle )	}</PageSubtitle> : null }
			{ props.children }
		</PageHeader>
	)
}
export const Byline = props => <PageByline>{ props.children }</PageByline>

export const Article = props => <PageArticle>{ props.children }</PageArticle>
export const Section = props => <PageSection {...props}>{ props.children }</PageSection>

// declare
Header.propTypes = {
	pageTitle: 		PropTypes.string.isRequired,
	pageSubtitle: PropTypes.string,
	pageByline: 	PropTypes.string,
	children: 		PropTypes.element,
}
Section.propTypes = {
	children: 		PropTypes.any,
}
Article.propTypes = {
	children: 		PropTypes.any.isRequired,
}