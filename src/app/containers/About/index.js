// tools
import React from "react"

// components
import { Header, Section, Article } from "../../components/Article"
import { Figure } from "../../components/Pictures"
import { Link } from "react-router"


// render
export const About = props => {
	return(
		<Article>
			<Header 
				pageTitle="Analog.Cafe ☕️" 
				pageSubtitle="Film Photography Publication" 
				pageByline="Edited by dmitrizzle"
			/>
			<Section>
				
				<p><strong>Analog.Cafe is a curated film photography publication that encourages and supports collaboration.</strong></p>
				
				<p>Analog.Cafe aims to unite the film photography medium&rsquo;s creative community through photo essays, written prose and articles.</p>
				
				<p>This project began as a Kickstarter <a href="https://www.kickstarter.com/projects/dmitrizzle/analogcafe-the-remarkable-film-photography-blog" rel="nofollow" target="_blank">campaign</a> on April 12, 2017. It got 100% funded within the first three weeks. Fifty-one person has pledged their contributions to help this publication become a reality.</p>
				
				<Figure src="images/app/film_photo-portrait_of_dmitri_by_betty.jpg">dmitrizzle&rsquo;s portrait, double-exposed with a photograph of a street dog. Shot on Instax Mini Monochrome by Betty.</Figure>
				
				<p>Analog.Cafe is a community-based, open-source (find us on GitHub!) project. There&rsquo;s an open conversation on <a href="https://twitter.com/analog_cafe" rel="nofollow" target="_blank">Twitter</a> and a private one amongst the contributors on Slack. What you see here is a product of a group effort by passionate creative individuals.</p>
				
				<p>This project might not be for everyone. It is a curated collection of creative works based on certain tastes and styles that may not please all. Which is OK. As long as you are enjoying yourself, you are always welcome here.</p>
				
				<p>And if you&rsquo;d like to <Link to="/submit">participate</Link> we&rsquo;d be lucky to have you on-board. 🙌</p>
				
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