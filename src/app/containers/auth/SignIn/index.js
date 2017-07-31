// tools
import React from "react"
import Link from "../../../components/Link"

// redux
import { connect } from "react-redux"

// components
import SignInWithEmail from "../../forms/SigninWithEmail"
import Heading from "../../../components/ArticleHeading"
import { Article, Section } from "../../../components/ArticleStyles"


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
					<TwitterButton to="/submit/send">Sign In with Twitter</TwitterButton>
					<p><em>- or -</em></p>
					<SignInWithEmail />
				</ButtonGroup>

			</Section>
		</Article>
	)
	else
	return(
		<Article>
			<Heading
				pageTitle="😏"
				pageSubtitle="You Are Already Signed In!"
			/>
			<Section>
				<p style={{textAlign: "center"}}>Click <strong><Link to="/my-stuff">here</Link></strong> to see your stuff.</p>
			</Section>
		</Article>
	)
}

// connet with redux
const mapStateToProps = state => {
	return {
    user: state.user,
	}
}

export default connect(mapStateToProps)(SignIn)
