// tools
import React from "react"
import errorMessage from "../../../constants/error-messages"

// components
import { ModalDispatch } from "../../containers/Modal"

// styles
import { Image, Figure, Caption } from "./styles"
import placeholder from "../icons/images/placeholder-profile.png"

// return
export default props => {
	return (
		<Figure { ...props } >
			<Image { ...props } />
			<figcaption style={ props.nocaption && { borderBottom: "8px solid #2c2c2c", height: 0, overflow: "hidden" } }>

			{ props.author ?
					<Caption { ...props } >
						{ props.children }
						{
							props.readOnly ?
							<div>Image by <span style={ props.author.name === "" ? { display: "none" } : null } ><ModalDispatch
								with={
									props.author.id !== "unknown"
										? {
											request: {
											url: "/api/author/" + props.author.id,
											}
										}
										: {
											info: {
												image: placeholder,
												title: "Error " + props.author.errorCode + " 😧",
												text: errorMessage.NO_AUTHOR
											},
											id: "errors/author"
										}
								}
							>{ props.author.name }</ModalDispatch></span></div> : null
						}
					</Caption>
				: <Caption { ...props } >{ props.children }</Caption>
			}

			</figcaption>
		</Figure>
	)
}
