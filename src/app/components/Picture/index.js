// tools
import React from "react"

// components
import { ModalDispatch } from "../../containers/Modal"

// styles
import { Image, Figure, Caption, Byline } from "./styles"

// return
export default props => {
	return (
		<Figure { ...props } >
			<Image { ...props } />
			<figcaption style={ props.nocaption && { borderBottom: "8px solid #2c2c2c", height: 0, overflow: "hidden" } }>

			{ props.author ?
					<Caption { ...props } >
						{ props.children }
						Image by <Byline { ...props } style={ props.author.name === "" ? { display: "none" } : null } ><ModalDispatch
							with={{
								request: {
									url: "/api/author/" + props.author.id,
								}
							}}
						>{ props.author.name }</ModalDispatch></Byline>
					</Caption>
				: <Caption { ...props } >{ props.children }</Caption>
			}

			</figcaption>
		</Figure>
	)
}
