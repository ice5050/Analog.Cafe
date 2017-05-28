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
// export class Article extends React.Component {
//   onChange = () => {
//   	console.log("article change")
//   }
// 	render() {
// 		return (
// 			<PageArticle onChange={ this.onChange }>{ this.props.children }</PageArticle>
// 		)
// 	}
// }




export const Section = props => {
	return <PageSection>{ props.children }</PageSection>
}


// ${ props => props.textLength > 150 ? css`
// ${	props => props.theme.size.breakpoint.min.l`
// 		column-count: 2;
// 		column-gap: ${ props => props.theme.size.block.column.safety * 2 }em;
// ` }` : null }


// export const Quote = props => {
// 	return (
// 		<PageQuote {...props} cite={ props.cite } textLength={ props.children.toString().length }>
// 			<p>{ props.children }</p>
// 			{ props.cite ? <cite>{ props.cite }</cite> : null }
// 		</PageQuote>
// 	)
// }


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