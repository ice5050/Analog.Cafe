// tools
import React from "react"
import styled from "styled-components"

// components
import Heading from "../../ArticleHeading"
import Figure from "../../Picture"
import Link from "../../Link"

// styles
import { Section, Article, Quote } from "../../ArticleStyles"

const ThankYouList = styled(Quote)`
	font-style: normal !important;
	&::first-letter {
		font-size: inherit !important;
		font-weight: inherit !important;
		float: none !important;
		margin: 0 !important;
	}
	&::before, &::after { content: "" !important }
`

// render
export default props => {
	return(
		<Article>
			<Heading
				pageTitle="Analog.Cafe ☕️"
				pageSubtitle="Film Photography Publication"
			/>
			<Section endsign>
				<Figure src="/images/figures/about-chiangmai-8.jpg" feature>A lamp that lights the work table with the laptop, notebook and camera used to build this website. Shot on Ilford PAN 400, pushed to 1600.</Figure>

				<blockquote><strong>Analog.Cafe</strong> exists because of the people who contribute their art and the editors who curate it. Because of the developers and designers who contribute their time and skill to build this platform. And because of the 51 people who have graciously <Link to="https://www.kickstarter.com/projects/dmitrizzle/analogcafe-the-remarkable-film-photography-blog">funded</Link> the initial stages of this project.</blockquote>
				<p><strong>Analog.Cafe</strong> is a curated film photography publication that encourages and supports collaboration.</p>
				<p>This project is a selection of creative & informative works based on quality, creativity and diversity.</p>

				<Figure src="/images/figures/about-chiangmai.jpg" feature>An overcast view of Doi Suthep mountain and Chiang Mai city at the foot of it. Shot on expired Macro Eagle TCS 400 color surveilance film.</Figure>
				<p><strong>Analog.Cafe</strong> began as an idea inspired by collaboration and shared passion for creativity. It is a product of past, present and future technology &mdash; and ideas.</p>
				<p>This project is initiated and built in-part by <em>dmitrizzle</em> from the tropical mountain city of Chiang Mai (Thailand).</p>

				<hr />

				<h3>Thank You Kickstarter Backers</h3>
				<p>The individuals in this list are the first to offer their love and support. A huge round of applause and a low bow goes to this noble group! <span role="img" aria-label="Clapping hands and a bowing person">👏🙇</span></p>

				<ThankYouList>
					Thayanantha Thevanayagam<br />
					Betty Dai<br />
					Kevin Kethcart<br />
					Fernando Lavín García<br />
					Lee Webb<br />
					Lewis Phan<br />
					Genester<br />
					Jose Altamirano<br />
					Marianne Oliver<br />
					Michael Jones<br />
					Tim Dobbs<br />
					James Cockroft<br />
					Dustin Veitch<br />
					Jennifer Precious Finch<br />
					Denise<br />
					Frank Russo<br />
					Domenico Stefani<br />
					Stephen King<br />
					Arjun Mohan<br />
					Kevin Aungle<br />
					Jack Yu<br />
					Stephen Dowling<br />
					David Vonk<br />
					Joey Pasco<br />
					Kanoa Mulling<br />
					Barbara Van Hee<br />
					Jacob Michael Hanania<br />
					Rob James Davie<br />
					Joey Santiago<br />
					Danielle Cardoz<br />
					Francisco Montoto Monroy<br />
					Jonathan Zobro<br />
					Matthew Stollmeyer<br />
					Ishtiaq Rahman<br />
					Lu Yu<br />
					Jan Ian Chow<br />
					Olga Tcherbadji<br />
					Andreea Cojocaru<br />
					Jeff Santos<br />
					Arjan Wiertz<br />
					Stepan Cherbadzhi<br />
					Jackie Wong<br />
					Vivian Qiu<br />
					Ben Yee<br />
					Ashley Taylor<br />
					Anonymous<br />
					Anonymous<br />
					Geraldine Pontius<br />
					Larry Treadway<br />
					Hakan Alca<br />
					Ben Cairns
				</ThankYouList>

				<h3>Connect, Contact & Get Involved</h3>
				<p>If you have a question, suggestion or just want to chat, feel free to follow and message on <Link to="https://twitter.com/analog_cafe">Twitter</Link>, <Link to="https://facebook.com/analog8cafe">Facebook</Link> or <Link to="https://instagram.com/analog_cafe">Instagram</Link>. Otherwise you can email <strong>d (at) analog (dot) cafe</strong>.</p>

			</Section>
		</Article>
	)
}
