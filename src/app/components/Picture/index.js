// tools
import React from "react"

// components
import { ModalDispatch } from "../../containers/Modal"

// styles
import { Image, Figure, Caption, Byline } from "./styles"
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
							<div>Image by <Byline { ...props } style={ props.author.name === "" ? { display: "none" } : null } ><ModalDispatch
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
												title: "Unknown Author (" + props.author.errorCode + ") 🤔",
												text: "Seems like there is no author listed... Sorry!"
											},
											id: "errors/author"
										}
								}
							>{ props.author.name }</ModalDispatch></Byline></div> : null
						}
					</Caption>
				: <Caption { ...props } >{ props.children }</Caption>
			}

			</figcaption>
		</Figure>
	)
}
