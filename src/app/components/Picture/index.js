// tools
import React from "react"
import PropTypes from "prop-types"

// components
import { ModalLink } from "../../containers/Modal"

// styles
import { PictureImage, PictureFigure, PictureCaption } from "./styles"

// return
export const Figure = props => {
	return (
		<PictureFigure { ...props } >
			<PictureImage { ...props } />
			<figcaption>
			
			{ props.author
				? <ModalLink
					title={ props.author.name }
					fetch={ "/api/author/" + props.author.id }
				>
					<PictureCaption { ...props } >
						{ props.children }
						Image by <u>{ props.author.name }</u>.
					</PictureCaption>
				</ModalLink>
				: <PictureCaption { ...props } >{ props.children }</PictureCaption>
			}
			
			</figcaption>
		</PictureFigure>
	)
}

// declare
PictureCaption.propTypes = {
	children: 		PropTypes.any,
}
