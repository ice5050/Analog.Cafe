// tools
import React from "react"

// styles
import { Card, CardButton, CardCaption, CardHeader } from "../styles"
export { ModalOverlay } from "./styles"


// return
export const ModalCard = props => {
  return (
		<Card style={{
			margin: "5vh auto 90.1vh", // 90.1vh is required for iOS to be scrollable
		}}>
			<CardHeader>
				<h3>{ props.title }</h3>
				<a href="#close">✕</a>
			</CardHeader>
			<figure>
				<img
					src={ props.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }
					style={{ display: typeof props.image === "undefined" ? "none" : "initial" }}
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
	)
}
