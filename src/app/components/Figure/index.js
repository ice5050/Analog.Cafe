// tools
import React from "react"

// components
import ModalLink from "../../containers/Modal"

// styles
import { Image, Figure, Caption, Byline } from "./styles"

// return
export default props => {
	return (
		<Figure { ...props } >
			<Image { ...props } />
			<figcaption>

			{ props.author
				? <ModalLink
					title={ props.author.name }
					fetch={ "/api/author/" + props.author.id }
				>
					<Caption { ...props } >
						{ props.children }
						<Byline { ...props } >Image by <u>{ props.author.name }</u>.</Byline>
					</Caption>
				</ModalLink>
				: <Caption { ...props } >{ props.children }</Caption>
			}

			</figcaption>
		</Figure>
	)
}
