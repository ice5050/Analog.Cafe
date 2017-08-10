// tools
import React from "react"
import { saveHeader } from "../../helpers/saver"
import { loadHeader } from "../../helpers/loader"

// components
import TitleCase from "../../../TitleCase"
import { ModalDispatch } from "../../../Modal"


// styles
import { Header, Byline } from "../../../../components/ArticleStyles"
import placeholder from "../../../../components/_icons/images/placeholder-profile.png"


const maxSuggestedTitleLength = 32
const maxSuggestedSubtitleLength = 52

// return
export default class extends React.Component {
	constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this)
  }
	state = {
		title: { warning: false },
		subtitle: { warning: false },
	}
  componentWillMount() {
		this.headerData = loadHeader()
	}
  handleTitleChange(event) {
  	this.headerData.title = event
  	saveHeader(this.headerData);
		((this.headerData.title).length > maxSuggestedTitleLength)
		? this.setState({ title: { warning: true }})
		: this.setState({ title: { warning: false }})
  }
  handleSubtitleChange(event) {
  	this.headerData.subtitle = event
  	saveHeader(this.headerData);
		((this.headerData.subtitle).length > maxSuggestedSubtitleLength)
		? this.setState({ subtitle: { warning: true }})
		: this.setState({ subtitle: { warning: false }})

  }
  render() {
		return (
			<Header>
				<TitleCase
					placeholder={ this.props.pageTitle }
					onChange={ this.handleTitleChange }
					value={ this.headerData.title }
					inputDesignation="title"
					warning={ this.state.title.warning || this.headerData.title.length > maxSuggestedTitleLength }
				/>
				<TitleCase
					placeholder={ this.props.pageSubtitle }
					onChange={ this.handleSubtitleChange }
					value={ this.headerData.subtitle }
					inputDesignation="subtitle"
					warning={ this.state.subtitle.warning || this.headerData.subtitle.length > maxSuggestedSubtitleLength }
				/>
					<Byline>
						Link to <ModalDispatch
							with={
								this.props.user.status === "ok"
								? {
									request: {
										url: "/api/author/" + this.props.user.info.author.id,
									},
								}
								: {
									info: {
										image: placeholder,
										title: "Your Profile",
										text: "You can create, view or update your profile after you send your submission."
									},
									id: "hints/author"
								}
							}
						>Your Profile</ModalDispatch> will appear here.
					</Byline>
			</Header>
		)
	}
}
