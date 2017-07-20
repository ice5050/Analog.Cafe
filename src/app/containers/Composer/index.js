// tools
import React from "react"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"


// placeholders
const titlePlaceholder = {
	title: "Title",
	subtitle: "Subtitle (Optional)",
}

// return
export default class extends React.Component {
	render() {
		return(
			<div>
				<HeaderEditor
  				pageTitle={ titlePlaceholder.title }
  				pageSubtitle={ titlePlaceholder.subtitle }
  			/>
				<ContentEditor
					ref={ input => { this.contentEditor = input } }
				/>
			</div>
		)
	}
}
