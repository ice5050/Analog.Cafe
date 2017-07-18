// tools
import React from "react"

// components
import { ModalDispatch } from "../../Modal"
import { Button } from "../../../components/Button"
import { SubtitleInput } from "../../../components/InputText"

// styles
import { Form } from "./styles"


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
  }
  render() {
		return(
      <Form warning={ this.state.warning }>
        <SubtitleInput
          placeholder="Type Your Email"
          onChange={ this.handleEmailChange }
          required
        />

        <ModalDispatch
            with={{
              request: {
                url: "/api/auth/email",
                data: { email: this.state.email },
              }
            }}
            wrapperElement="div"
          >
          <Button onClick={ this.handleSubmit }>Sign In</Button>
        </ModalDispatch>
      </Form>
		)
	}
}
