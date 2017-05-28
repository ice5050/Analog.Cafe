// tools
import React from "react"
import PropTypes from "prop-types"
import toTitleCase from "titlecase"


// styles
import { PageHeader, PageTitle, PageSubtitle, PageByline, PageTools } from "./styles/header"
import { PageArticle, PageSection } from "./styles/section"

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





//vvv needs restyling
// export const SectionDivider = props => {
// 	return <PageBreak>✽ ✽ ✽</PageBreak>
// }


// declare
Header.propTypes = {
	pageTitle: 		PropTypes.string.isRequired,
	pageSubtitle: PropTypes.string,
	pageByline: 	PropTypes.string,
	children: 		PropTypes.element,
}
Section.propTypes = {
	children: 		PropTypes.any.isRequired,
}
Article.propTypes = {
	children: 		PropTypes.any.isRequired,
}