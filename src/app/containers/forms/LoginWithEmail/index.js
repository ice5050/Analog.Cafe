// tools
import React from "react"

// components
import ModalLink from "../../Modal"
import { Button } from "../../../components/Button"
import { SubtitleInput } from "../../../components/InputText"

// styles
import { Form } from "./styles"
import banner from "../../../components/icons/images/banner-email.jpg"



// state

// render
export default class extends React.Component {
	state = {
	}

  render() {
		return(
      <Form>
        <SubtitleInput placeholder="Type Your Email" required />
        <ModalLink
            title="Login with Email"
            image={ banner }
            fetch={ "/api/auth/email" }
            // method="post"
            data={{ email: "d@analog.cafe" }}
          >
            <Button>Log In</Button>
          </ModalLink>
      </Form>
		)
	}
}
