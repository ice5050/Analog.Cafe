// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"
import { Section } from "../../components/ArticleStyles"


// placeholders
const titlePlaceholder = {
	title: "Title",
	subtitle: "Subtitle (Optional)",
}

// return
const Composer = props => {
	return(
		<div>
			<HeaderEditor
				pageTitle={ titlePlaceholder.title }
				pageSubtitle={ titlePlaceholder.subtitle }
				user={ props.user }
			/>
			<Section>
				<ContentEditor
					ref={ input => { this.contentEditor = input } }
				/>
			</Section>
		</div>
	)
}

// connet with redux
const mapStateToProps = state => {
	return {
    user: state.user,
	}
}

export default connect(mapStateToProps)(Composer)
