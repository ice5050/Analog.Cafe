// tools
import React from "react"

// components
// import ModalDispatch from "../../containers/Modal"

// styles
import AuthorLink from "../AuthorLink"
import { Image, Figure, Caption, Byline } from "./styles"
import placeholder from "../icons/images/placeholder-profile.png"

// return
export default props => {
	return (
		<Figure { ...props } >
			<Image { ...props } />
			<figcaption style={ props.nocaption && { borderBottom: "8px solid #2c2c2c", height: 0, overflow: "hidden" } }>

			{ props.author ?
				// <ModalDispatch
				// 	title={ props.author.name }
				// 	image={ placeholder }
				// 	fetch={ "/api/author/" + props.author.id }
				// >
					<Caption { ...props } >
						{ props.children }
						<Byline { ...props } style={ props.author.name === "" ? { display: "none" } : null } > Image by <AuthorLink>{ props.author.name }</AuthorLink>.</Byline>
					</Caption>
				// </ModalDispatch>
				: <Caption { ...props } >{ props.children }</Caption>
			}

			</figcaption>
		</Figure>
	)
}
