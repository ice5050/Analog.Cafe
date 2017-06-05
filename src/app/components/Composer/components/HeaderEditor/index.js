// tools
import React from "react"
import { saveHeader } from "../../helpers/saver"
import { loadHeader } from "../../helpers/loader"

// components
import { PageTitle, PageSubtitle } from "./components/InputTitle/styles"

// styles
import { PageHeader, PageByline } from "../../../Article/styles/header"



// return
let headerData = loadHeader()
export class HeaderEditor extends React.Component {
	constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
  }
  handleTitleChange(event) {
  	headerData.title = event
  	saveHeader(headerData)
  }
  handleSubtitleChange(event) {
  	headerData.subtitle = event
  	saveHeader(headerData)
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