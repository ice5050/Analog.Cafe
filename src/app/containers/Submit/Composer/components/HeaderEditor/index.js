// tools
import React from "react"
import { saveHeader } from "../../helpers/saver"
import { loadHeader } from "../../helpers/loader"

// components
import { PageTitle, PageSubtitle } from "./components/InputTitle/styles"
import { ModalLink } from "../../../../Modal"


// styles
import { PageHeader, PageByline } from "../../../../../components/Article/styles/header"



// return
export class HeaderEditor extends React.Component {
	constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
  }
  componentDidMount() {
		this.headerData = loadHeader()
	}
  handleTitleChange(event) {
  	this.headerData.title = event
  	saveHeader(this.headerData)
  }
  handleSubtitleChange(event) {
  	this.headerData.subtitle = event
  	saveHeader(this.headerData)
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
				
				<ModalLink
					title={ "Your Name Goes Here" }
					fetch={ "/api/author/example" }
				><PageByline>by <u>You</u></PageByline></ModalLink>
				
				
			</PageHeader>
		)
	}
}