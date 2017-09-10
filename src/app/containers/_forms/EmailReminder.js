// tools
import React from "react"

// components
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
    event.stopPropagation()
    event.preventDefault()
    validateEmail(this.state.email)
      ? window.open(
          "https://cafe.us4.list-manage.com/subscribe/post?u=256339f7eafa36f2f466aca44&id=12d8a644fa&MERGE0=" +
            this.state.email
        )
      : this.setState({ warning: true })
  }
  render = () => {
    return (
      <Form warning={this.state.warning}>
        <SubtitleInput
          placeholder="@Your Email"
          onChange={this.handleEmailChange}
          required
        />
        <Button onClick={this.handleSubmit} red>
          Yes, Remind Me
        </Button>
      </Form>
    )
  }
}
