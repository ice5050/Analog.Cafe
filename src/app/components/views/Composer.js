// tools
import React from "react"

// components
import { Article } from "../ArticleStyles"
import { Button } from "../Button"
import { ModalDispatch } from "../../containers/Modal"
import Composer from "../../containers/Composer"


// render
export default props => {
	return (
		<Article>
			<Composer />
			<ModalDispatch
				with={{
					request: {
						url: "/api/messages/submit-consent"
					}
				}}
				wrapperElement="div"
			>
			<Button to="/sign-in" red>Send Submission <span role="img" aria-label="Rocket">🚀</span></Button></ModalDispatch>
		</Article>
	)
}
