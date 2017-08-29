// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import Forbidden from "../../_screens-errors/Forbidden"
import { CardEditableProfile } from "../../../components/Card"

import Heading from "../../../components/ArticleHeading"
import { LinkButton } from "../../../components/Button"
import { Article } from "../../../components/ArticleStyles"

// render
class EditProfile extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleButtonLinkChange = this.handleButtonLinkChange.bind(this)
    this.state = {
      title: this.props.user.title,
      text: this.props.user.text,
      image: this.props.user.image,
      buttons: this.props.user.buttons
    }
  }
  handleTitleChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    })
  }
  handleTextChange(event) {
    this.setState({
      ...this.state,
      text: event.target.value
    })
  }
  handleButtonLinkChange(event) {
    this.setState({
      ...this.state,
      buttons: [
        this.props.buttons[0],
        {
          to: event.target.value,
          text: "Link"
        }
      ]
    })
  }
  render() {
    return this.props.user.status !== "ok"
      ? <Article>
          <Heading pageTitle="Edit Your Profile" />
          <CardEditableProfile
            // author's name
            title={this.props.title}
            changeTitle={this.handleTitleChange}
            // author's bio
            text={this.props.text}
            changeText={this.handleTextChange}
            // author's avatar image
            image={this.props.image}
            // author's link
            buttons={this.props.buttons}
            changeButtons={this.handleButtonLinkChange}

            //
            //
            //
            // SAMPLE PROPS:
            // THESE VALUES ARE INSERTED FROM MONGO > USERS
            //
            // title="Author Name"
            // text="Short author bio."
            // image="/images/avatars/dmitrizzle.jpg"
            // buttons={[
            //   {
            //     to: "/author/dmitrizzle",
            //     text: "More on Analog.Cafe",
            //     red: true
            //   },
            //   {
            //     to: "https://twitter.com/dmitrizzle/1237837468976r987s",
            //     text: "Follow on Twitter"
            //   }
            // ]}
            //
            //
            //
          />
          <LinkButton to="/me" red>
            Done
          </LinkButton>
        </Article>
      : <Forbidden />
  }
}

// connet with redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(EditProfile)
