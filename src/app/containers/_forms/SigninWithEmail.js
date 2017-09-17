// tools
import React from "react"

// components
import { ModalDispatch } from "../Modal"
import { Button } from "../../components/Button"
import { SubtitleInput } from "../../components/InputStyles"

// styles
import { Form } from "../../components/FormStyles"

// helpers
import validateEmail from "./helpers/validateEmail"

import { MESSAGE_HINT_CHECK_EMAIL } from "../../../constants/messages/hints"

// render
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { email: "", warning: false }
  }
  handleEmailChange = event => {
    this.setState({ email: event.target.value || "", warning: false })
  }
  handleSubmit = event => {
    if (validateEmail(this.state.email)) return
    event.stopPropagation()
    event.preventDefault()
    this.setState({ warning: true })
  }
  render = () => {
    return (
      <Form>
        <SubtitleInput
          placeholder="Type Your Email"
          onChange={this.handleEmailChange}
          required
          maxLength="200"
          warning={this.state.warning}
        />

        <ModalDispatch with={MESSAGE_HINT_CHECK_EMAIL} wrapperElement="div">
          <Button onClick={this.handleSubmit}>Sign In</Button>
        </ModalDispatch>
      </Form>
    )
  }
}
