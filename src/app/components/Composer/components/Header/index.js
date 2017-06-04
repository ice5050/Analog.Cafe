// tools
import React from "react"
import { saveHeader } from "../../helpers/saver"
import { loadHeader } from "../../helpers/loader"
import { connect } from "react-redux"

// components
import { PageTitle, PageSubtitle } from "./components/InputTitle/styles"

// actions
import { changeTitle, changeSubtitle } from "../../../../actions/composerActions"

// styles
import { PageHeader, PageByline } from "../../../Article/styles/header"



// return
let headerData = {}
export default class ComposerHeader extends React.Component {
	constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
  }
  handleTitleChange(event) {
  	headerData.title = event
  	saveHeader(headerData)
    //this.props.changeTitle(event)
  }
  handleSubtitleChange(event) {
  	headerData.subtitle = event
  	saveHeader(headerData)
    //this.props.changeSubtitle(event)
  }
  render() {
		return (
			<PageHeader>
				<PageTitle
					placeholder="Write Your Title Here"
					onChange={ this.handleTitleChange }
					value={ loadHeader().title }
				></PageTitle>
				<PageSubtitle
					placeholder="Subtitle (Optional)"
					onChange={ this.handleSubtitleChange }
					value={ loadHeader().subtitle }
				></PageSubtitle>
				<PageByline>Your name & profile link will appear here.</PageByline>
			</PageHeader>
		)
	}
}
// const mapStateToProps = (state) => {
// 	return {
// 		title: state.title,
// 		subtitle: state.subtitle
// 	}
// }
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		changeTitle: (text) => {
// 			dispatch(changeTitle(text))
// 		},
// 		changeSubtitle: (text) => {
// 			dispatch(changeSubtitle(text))
// 		}
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ComposerHeader)