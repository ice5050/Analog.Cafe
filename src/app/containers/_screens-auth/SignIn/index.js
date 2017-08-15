// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import SignInWithEmail from "../../_forms/SigninWithEmail"
import Heading from "../../../components/ArticleHeading"
import { Article, Section } from "../../../components/ArticleStyles"
import AlreadyAuthenticated from "../../_screens-errors/AlreadyAuthenticated"


// styles
import { ButtonGroup } from "../../../components/Button"
import { TwitterButton } from "./styles"

// render
const SignIn = props => {
	if(props.user.status !== "ok")
	return(
		<Article>
			<Heading pageTitle="Sign In" />
			<Section>

				<ButtonGroup>
					<TwitterButton to="/submit/send">Sign in With Twitter</TwitterButton>
					<p><em>- or -</em></p>
					<SignInWithEmail />
				</ButtonGroup>

			</Section>
		</Article>
	)
	else
	return <AlreadyAuthenticated />
}

// connet with redux
const mapStateToProps = state => {
	return {
    user: state.user,
	}
}

export default connect(mapStateToProps)(SignIn)
