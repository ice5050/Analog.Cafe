// tools
import React from "react"

// styles
import { Card, Overlay, CardButton, CardCaption } from "./styles"


// return
export const Modal = props => {
	return (
		<Overlay>
			<Card>
				<header>
					<h3>{ props.title || "Hello!" }</h3>
					<a href="#close">✕</a>
				</header>
				<figure style={{ height: props.image ? "inherit" : "0" }}>
					<img src={ props.image || "/images/app/placeholder.gif" } style={{ height: props.image ? "inherit" : "0" }} alt="Author profile" />
					<figcaption>
						<CardCaption style={{ padding: props.text ? "" : "0" }} >{ props.text || "" }</CardCaption>
					</figcaption>
				</figure>
				{
					props.buttons ?
					props.buttons.map(function(button, i) {
						return (
							<CardButton 
								to={ button.to || "/" } 
								key={ button.to }
								red={ button.red ? true : null }
							>{ button.text || "Analog.Cafe" }</CardButton>
						)
					}) : null
				}
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