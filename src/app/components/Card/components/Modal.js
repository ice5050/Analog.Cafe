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
	display: 					inline;
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
					<a href="#close" onClick={ props.hideModal } >✕</a>
				</CardHeader>
				<figure>
					<img
						src={ props.image }
						style={{ height: props.image ? "inherit" : "0" }}
						alt="Card"
					/>
					<figcaption>
						<CardCaption style={ props.text === "" && { padding: "0" } } >{ props.text }</CardCaption>
					</figcaption>
				</figure>
				{
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
