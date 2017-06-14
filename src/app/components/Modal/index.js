// tools
import React from "react"
import PropTypes from "prop-types"

// components
import { Figure } from "../Pictures"

// styles
import { Card, Overlay, CardButton, CardCaption } from "./styles"


// return
export const Modal = props => {
	return (
		<Overlay>
			<Card>
				<header>
					<h3>{ "Title" }</h3>
					<a href="#close">✕</a>
				</header>
				<figure>
					<img src="/images/uploads/poster.jpg" />
					<CardCaption>Figcaption</CardCaption>
				</figure>
				<CardButton to="/submit/compose">Submit Now</CardButton>
			</Card>
		</Overlay>
	)
}


// declare
// Header.propTypes = {
// 	pageTitle: 		PropTypes.string.isRequired,
// 	pageSubtitle: PropTypes.string,
// 	pageByline: 	PropTypes.string,
// 	children: 		PropTypes.element,
// }