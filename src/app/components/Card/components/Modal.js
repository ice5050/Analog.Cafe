// tools
import React from "react"

// styles
import styled from "styled-components"
import { Card, CardButton, CardCaption, CardHeader } from "../styles"


// modal overlay-specific styles
const ModalOverlay = styled.div`
	position: 									fixed;
	overflow:										scroll;
	-webkit-overflow-scrolling: touch;
	top: 												0;
	bottom: 										0;
	left: 											0;
	right: 											0;
	z-index: 										${ props => props.theme.layer.card };
	padding:  									5vh 0;
`
export const ModalWrapper = styled.div`
	display: 					block;
	position:					relative;
	z-index: 					${ props => props.theme.layer.card };
`


// return
export const ModalCard = props => {
  return (
		<ModalOverlay onClick={ props.hideModal } >
			<Card>
				<CardHeader>
					<h3>{ props.title }</h3>
					<a href="#close" onClick={ event => { event.preventDefault(); props.hideModal } } >✕</a>
				</CardHeader>
				<figure style={{ height: typeof props.image === "undefined" ? "0" : "inherit" }}>
					<img
						src={ props.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }
						alt="Card"
					/>
					<figcaption>
						<CardCaption
							style={{ padding: typeof props.text === "undefined" ? "0" : "" }}
						>{ props.text }</CardCaption>
					</figcaption>
				</figure>
				{
					props.buttons &&
					Object.keys(props.buttons).length !== 0 &&
					props.buttons.map(function(button, i) {
						return (
							<CardButton
								to={ button.to }
								key={ button.to }
								red={ button.red ? true : null }
							>{ button.text }</CardButton>
						)
					})
				}
			</Card>
		</ModalOverlay>
	)
}
