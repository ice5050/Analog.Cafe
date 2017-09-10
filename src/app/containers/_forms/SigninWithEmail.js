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

// render
export default class extends React.Component {
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
  render() {
    return (
      <Form>
        <SubtitleInput
          placeholder="Type Your Email"
          onChange={this.handleEmailChange}
          required
          maxLength="200"
          warning={this.state.warning}
        />

        <ModalDispatch
          with={{
            request: {
              url: "/api/auth/messages/check-email",
              data: { email: this.state.email }
            }
          }}
          wrapperElement="div"
        >
          <Button onClick={this.handleSubmit}>Sign In</Button>
        </ModalDispatch>
      </Form>
    )
  }
}
