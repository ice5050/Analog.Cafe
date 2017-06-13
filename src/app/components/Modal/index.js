// tools
import React from "react"
import PropTypes from "prop-types"

// components
import { PageButton } from "../Buttons"
import { Figure } from "../Pictures"


// styles

// return
export const Modal = props => {
	return (
		<aside>
				<header>
					<h3>{ "Title" }</h3>
					<a href="#close">✕</a>
				</header>
				<Figure src="/images/uploads/poster.jpg">Figcaption</Figure>
				<PageButton to="/submit/compose" red>Submit Now</PageButton>
			</aside>
	)
}


// declare
// Header.propTypes = {
// 	pageTitle: 		PropTypes.string.isRequired,
// 	pageSubtitle: PropTypes.string,
// 	pageByline: 	PropTypes.string,
// 	children: 		PropTypes.element,
// }