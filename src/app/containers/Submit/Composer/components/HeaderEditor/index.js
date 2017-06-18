// tools
import React from "react"
import { saveHeader } from "../../helpers/saver"
import { loadHeader } from "../../helpers/loader"

// components
import { Title, Subtitle } from "./components/InputTitle/styles"
import ModalLink from "../../../../Modal"


// styles
import { Header, Byline } from "../../../../../components/ArticleStyles"



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
			<Header>
				<Title
					placeholder={ this.props.pageTitle }
					onChange={ this.handleTitleChange }
					value={ loadHeader().title }
				></Title>
				<Subtitle
					placeholder={ this.props.pageSubtitle }
					onChange={ this.handleSubtitleChange }
					value={ loadHeader().subtitle }
				></Subtitle>

				<ModalLink
					title={ this.props.author.name }
					fetch={ "/api/author/" + this.props.author.id }
				><Byline>by <u>{ this.props.author.name }</u></Byline></ModalLink>


			</Header>
		)
	}
}
