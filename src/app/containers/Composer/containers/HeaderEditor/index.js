// tools
import React from "react"
import { saveHeader } from "../../helpers/saver"
import { loadHeader } from "../../helpers/loader"

// components
import TitleCase from "../../../TitleCase"
import ModalLink from "../../../Modal"


// styles
import { Header, Byline } from "../../../../components/ArticleStyles"
import AuthorLink from "../../../../components/AuthorLink"
import placeholder from "../../../../components/icons/images/placeholder-profile.png"



// return
export default class extends React.Component {
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
				<TitleCase
					placeholder={ this.props.pageTitle }
					onChange={ this.handleTitleChange }
					value={ loadHeader().title }
					inputDesignation="title"
				></TitleCase>
				<TitleCase
					placeholder={ this.props.pageSubtitle }
					onChange={ this.handleSubtitleChange }
					value={ loadHeader().subtitle }
					inputDesignation="subtitle"
				></TitleCase>

				<ModalLink
					title={ this.props.author.name }
					image={ placeholder }
					fetch={ "/api/author/" + this.props.author.id }
				><Byline>Link to <AuthorLink>Your Profile</AuthorLink> will appear here.</Byline></ModalLink>

			</Header>
		)
	}
}
