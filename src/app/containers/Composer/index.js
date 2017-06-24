// tools
import React from "react"
// import styled from "styled-components"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"
import { Composer } from "../../components/views/Submit"
// import Button from "../../components/Button"


// placeholders
const authorPlaceholder = {
	name: "You",
	id:		"sample",
}
const titlePlaceholder = {
	title: "Title",
	subtitle: "Subtitle (Optional)",
}

// styles
// const ImageControls = styled.div`
// 	border-top:	${ props => props.theme.elements.thickBorder };
// 	margin: 0 -${ props => props.theme.size.block.column.safety }em
// `

// return
export default class extends React.Component {
	handleUploadButton = e => {
		e.preventDefault()
		e.stopPropagation()
		this.fileInput.click()
	}
	handleFileUpload = e => {
		const file = e.target.files[0]
		this.contentEditor.uploadRequest(file)
	}
	render() {
		return(
			<div>
				<Composer
		      header={
		        <HeaderEditor
		  				author={ authorPlaceholder }
		  				pageTitle={ titlePlaceholder.title }
		  				pageSubtitle={ titlePlaceholder.subtitle }
		  			/>
		      }
		    >
					<ContentEditor
						author={ authorPlaceholder }
						ref={ input => { this.contentEditor = input } }
					/>
					{/* <ImageControls>
							<Button onClick={ this.handleUploadButton }>
								Upload Your Image <span role="img" aria-label="Point upwards">🌅</span>
							</Button>
							<input
								type="file"
								accept="image/x-png,image/jpeg"
								style={{ display: "none" }}
								ref={ input => { this.fileInput = input } }
								onChange={ this.handleFileUpload }
							/>
							<Button>Editor&rsquo;s Choice Photos <span role="img" aria-label="Winnder's cup">🏆</span></Button>
					</ImageControls> */}
				</Composer>
			</div>
		)
	}
}
