// tools
import React from "react"

// styles
import { PageHeader, PageByline } from "../Article/styles/header"
import { PageTitle, PageSubtitle } from "./styles"

// return
export const Header = props => {
	return (
		<PageHeader>
			<PageTitle placeholder="Write Your Title Here ✍️"></PageTitle>
			<PageSubtitle placeholder="Subtitle (Optional)"></PageSubtitle>
			<PageByline>Your name & profile link will appear here.</PageByline>
		</PageHeader>
	)
}