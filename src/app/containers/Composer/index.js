// tools
import React from "react"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"
import { Composer } from "../../components/views/Submit"
import Button from "../../components/Button"

// styles
import { ButtonSection } from "./styles"


// placeholders
const authorPlaceholder = {
	name: "You",
	id:		"sample",
}
const titlePlaceholder = {
	title: "Title",
	subtitle: "Subtitle (Optional)",
}

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
						className="composerDomElement"
						ref={ input => { this.contentEditor = input } }
					/>
					<ButtonSection>
						<div>
							<Button onClick={ this.handleUploadButton }>
								Upload Image <span role="img" aria-label="Point upwards">☝️</span>
							</Button>
							<input
								type="file"
								accept="image/x-png,image/jpeg"
								style={{ display: "none" }}
								ref={ input => { this.fileInput = input } }
								onChange={ this.handleFileUpload }
							/>
						</div>
					</ButtonSection>
				</Composer>
			</div>
		)
	}
}
