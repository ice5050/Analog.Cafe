// tools
import React from "react"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"
import { Composer } from "../../components/views/Submit"


// placeholders
const authorPlaceholder = {
	name: "",
	id:		"sample",
}
const titlePlaceholder = {
	title: "Title",
	subtitle: "Subtitle (Optional)",
}


// return
export default class extends React.Component {
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
				</Composer>
			</div>
		)
	}
}
