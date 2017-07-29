// tools
import React from "react"

// components
import Heading from "../ArticleHeading"
import { Section, Article } from "../ArticleStyles"
import SignInWithEmail from "../../containers/forms/EmailReminder"
import Figure from "../Picture"



// render
export default props => {
	return(
		<Article>
			<Heading
				pageTitle="Submit"
				pageSubtitle="Film Photography & Essays"
			/>
			<Section endsign>


				<h3>Submissions open on 09.17</h3>
				<p>This September we are opening submissions to Analog.Cafe. Let us send you a reminder on the day:</p>

				<SignInWithEmail />

				<hr />

				<h3>Some things to look forward to.</h3>
				<Figure src="/images/pictures/submit.gif" nocaption />
				<p>All submissions will be accepted through <strong>Analog.Cafe <em>Composer</em> app</strong>. With it you’ll be able to drag & drop your images, add text and see your work exactly how it would appear on the website.</p>




			</Section>
		</Article>
	)
}
