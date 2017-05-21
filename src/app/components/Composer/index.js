// tools
import React from "react"
// import toTitleCase from "titlecase"


// styles
import { PageHeader, PageByline } from "../Article/styles/header"
import { PageTitle, PageSubtitle } from "./styles/header"

// return
export const Header = props => {
	return (
		<PageHeader>
			<PageTitle placeholder="Title (Required)"></PageTitle>
			<PageSubtitle placeholder="Subtitle (optional)"></PageSubtitle>
			<PageByline>Your name & profile link will appear here.</PageByline>
		</PageHeader>
	)
}

// declare
Header.propTypes = {
	pageSubtitle: React.PropTypes.string,
}