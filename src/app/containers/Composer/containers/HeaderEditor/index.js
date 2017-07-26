// tools
import React from "react"
import { saveHeader } from "../../helpers/saver"
import { loadHeader } from "../../helpers/loader"

// components
import TitleCase from "../../../TitleCase"
import { ModalDispatch } from "../../../Modal"


// styles
import { Header, Byline } from "../../../../components/ArticleStyles"
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


					<Byline>
						Link to <ModalDispatch
							with={{
								info: {
									image: placeholder,
									title: "Your Profile",
									text: "You can create, view or update your profile after you send your submission. 🚀"
								},
								id: "placeholders/author"
							}}
						><em style={{ fontVariant: "normal" }}>Your Profile</em></ModalDispatch> will appear here.
					</Byline>


			</Header>
		)
	}
}
