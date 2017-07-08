// tools
import React from "react"

// components
import Heading from "../../ArticleHeading"
import Figure from "../../Picture"
import Link from "../../Link"

// styles
import { Section, Article } from "../../ArticleStyles"


// render
export default props => {
	return(
		<Article>
			<Heading
				pageTitle="Analog.Cafe ☕️"
				pageSubtitle="Film Photography Publication"
			/>
			<Section endsign>
				<Figure src="/images/figures/banner.jpg" feature></Figure>

				<blockquote><strong>Analog.Cafe</strong> exists because of the people who contribute their art and the editors who curate it. Because of the developers and designers who contribute their time and skill to build this platform. And because of the 51 people who have graciously funded the initial stages of this project.</blockquote>
				<p><strong>Analog.Cafe</strong> is a curated film photography publication that encourages and supports collaboration.</p>
				<p>This project might is a selection of creative works and articles based tastes and styles that may not please all. Instead, it aims to </p>

				<hr />

				<h3>Thank You&rsquo;s</h3>
				<p>There would not be Analog.Cafe without the contributions from the following individuals:</p>

				<ul>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
					<li>John Doe</li>
				</ul>

				<p>Analog.Cafe is designed and developed by <em>dmitrizzle</em> with a lot of help from <em>Betty</em> in the mountainous Northern Thai city of Chiang Mai.</p>

			</Section>
		</Article>
	)
}
