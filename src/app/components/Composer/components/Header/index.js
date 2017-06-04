// tools
import React from "react"
import { connect } from "react-redux"

// components
import { PageTitle, PageSubtitle } from "./components/InputTitle/styles"

// actions
import { changeTitle, changeSubtitle } from "../../../../actions/composerActions"

// styles
import { PageHeader, PageByline } from "../../../Article/styles/header"



// return
class ComposerHeader extends React.Component {
	constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
  }
  handleTitleChange(event) {
    this.props.changeTitle(event)
  }
  handleSubtitleChange(event) {
    this.props.changeSubtitle(event)
  }
  render() {
		return (
			<PageHeader>
				<PageTitle
					placeholder="Write Your Title Here"
					onChange={ this.handleTitleChange }
				></PageTitle>
				<PageSubtitle
					placeholder="Subtitle (Optional)"
					onChange={ this.handleSubtitleChange }
				></PageSubtitle>
				<PageByline>Your name & profile link will appear here.</PageByline>
			</PageHeader>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		title: state.title,
		subtitle: state.subtitle
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		changeTitle: (text) => {
			dispatch(changeTitle(text))
		},
		changeSubtitle: (text) => {
			dispatch(changeSubtitle(text))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ComposerHeader)