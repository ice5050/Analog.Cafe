// tools
import React, { findDOMNode } from "react"

// components
import ModalLink from "../../Modal"
import { Button } from "../../../components/Button"
import { SubtitleInput } from "../../../components/InputText"

// styles
import { Form } from "./styles"
import banner from "../../../components/icons/images/banner-email.jpg"



// helpers
const validateEmail = (email) => {
  const rule = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
  return rule.test(email)
}

// render
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
	state = { email: "", warning: false }
  handleEmailChange(event){
    this.setState({ email: event.target.value || "", warning: false })
  }
  handleSubmit(event){
    if(validateEmail(this.state.email)) return
    event.stopPropagation()
    event.preventDefault()
    this.setState({ warning: true })
    React.findDOMNode(this.refs.emailInput).focus()
  }
  render() {
		return(
      <Form warning={ this.state.warning }>
        <SubtitleInput
          placeholder="Type Your Email"
          onChange={ this.handleEmailChange }
          ref={ input => { this.emailInput = input } }
          required
        />
        <ModalLink
            title="Login with Email"
            image={ banner }
            fetch={ "/api/auth/email" }
            method="post"
            data={{ email: this.state.email }}
          >
            <Button onClick={ this.handleSubmit }>Log In</Button>
          </ModalLink>
      </Form>
		)
	}
}
