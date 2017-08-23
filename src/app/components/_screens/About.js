// tools
import React from "react"
import styled from "styled-components"

// components
import Heading from "../ArticleHeading"
import Figure from "../Picture"
import Link from "../Link"
import { ModalDispatch } from "../../containers/Modal"

// styles
import { Section, Article, Quote } from "../ArticleStyles"

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
  return (
    <Article>
      <Heading
        pageTitle="Analog.Cafe ☕️"
        pageSubtitle="A Film Photography Publication"
      />
      <Section>
        <Figure src="/images/pictures/about-forest.jpg" feature noAuthor>
          A short ride up a twisty mountain road from downtown Chiang Mai<br />&mdash;
          where Analog.Cafe is built &mdash;<br />is a tropical forest.
        </Figure>
        <blockquote>
          <strong>Analog.Cafe</strong> exists because of the people who
          contribute their art and the editors who curate it. It’s because of
          the{" "}
          <Link to="https://github.com/dmitrizzle/Analog.Cafe/wiki/Contributors">
            developers
          </Link>{" "}
          and designers who devote their time and skill to build this platform.
          And because of the 51 people who have graciously{" "}
          <Link to="https://www.kickstarter.com/projects/dmitrizzle/analogcafe-the-remarkable-film-photography-blog">
            funded
          </Link>{" "}
          the initial stages of this project.
        </blockquote>
        <p>
          Analog.Cafe is an{" "}
          <ModalDispatch
            with={{
              info: {
                title: "Inclusive",
                text:
                  "Analog.Cafe is a human-edited publication; it’s bound to be shaped by personal opinions. However, it shall always strive to be welcoming and fair."
              },
              id: "footnotes/analog-cafe-inclusive"
            }}
          >
            inclusive
          </ModalDispatch>{" "}
          creative outlet that publishes{" "}
          <strong>outstanding images and stories</strong>.
        </p>
        <p>
          Analog.Cafe’s{" "}
          <ModalDispatch
            with={{
              info: {
                title: "Editors",
                text:
                  "Starting Fall 2017 Analog.Cafe will be expanding its editorial team. Until then it’s just me, “dmitrizzle”. Hello!"
              },
              id: "footnotes/analog-cafe-editors"
            }}
          >
            editor(s)
          </ModalDispatch>{" "}
          favour works based on{" "}
          <strong>skill, imagination, innovation and diversity</strong>.
        </p>

        <hr />

        <h3>Thank you, Kickstarter backers!</h3>
        <p>
          Analog.Cafe owes its existence in large part to the contributions,
          support and encouragement provided by the people below.{" "}
          <span role="img" aria-label="Clapping hands and a bowing person">
            👏🙇
          </span>
        </p>

        <ThankYouList>
          Thayanantha Thevanayagam<br />
          Betty Dai<br />
          Kevin Kethcart<br />
          Fernando Lavin (@film.lav)<br />
          Lee Webb<br />
          Lewis Phan<br />
          Genester<br />
          Jose Altamirano (josekasek)<br />
          Marianne Oliver<br />
          Michael Jones<br />
          Tim Dobbs<br />
          James Cockroft<br />
          faultyflipflap<br />
          Jennifer Precious Finch<br />
          Denise<br />
          Frank Russo<br />
          Domenico Stefani<br />
          Stephen King<br />
          Arjun Mohan<br />
          Kevin Aungle<br />
          Jack Yu<br />
          Stephen Dowling<br />
          Anonymous<br />
          Joey Pasco<br />
          Kanoa Mulling<br />
          BVH<br />
          Jacob Michael Hanania<br />
          Rob James Davie<br />
          Joey Santiago<br />
          Danielle Cardoz<br />
          Francisco M<br />
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
          Hakan (@haknization)<br />
          Ben Cairns
        </ThankYouList>

        <h3>Connect, contact & get involved.</h3>
        <p>
          If you have a question, suggestion or just want to chat, feel free to
          follow and message on{" "}
          <Link to="https://twitter.com/analog_cafe">Twitter</Link>,{" "}
          <Link to="https://facebook.com/analog8cafe">Facebook</Link> or{" "}
          <Link to="https://instagram.com/analog_cafe">Instagram</Link>.
          Otherwise you can email <strong>d (at) analog (dot) cafe</strong>
        </p>
      </Section>
    </Article>
  )
}
