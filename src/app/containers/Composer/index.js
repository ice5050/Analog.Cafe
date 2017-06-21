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
  focusEditor = e => {
		console.log("Focus on editor should occur now.")
	}
	onClickImage = e => {
		e.preventDefault()
		e.stopPropagation()
		console.log("Upload image button clicked.")
	}
	render() {
		return(
			<div onClick={ this.focusEditor.bind(this) }>
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
					/>
					<ButtonSection>
						<div>
							<Button onClick={ this.onClickImage }>
								<span role="img" aria-label="Point upwards">☝️</span>
								&nbsp;Upload Image
							</Button>
						</div>
					</ButtonSection>
				</Composer>
			</div>
		)
	}
}
