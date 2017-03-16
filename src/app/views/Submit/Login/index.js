// tools
import React from "react"
import { Link } from "react-router"

// components
import { Header, Section, Article, Quote } from "../../../components/Page"

// render
export const Login = props => {
	return(
		<Article>
			<Header 
				pageTitle=		"Submit your shit" 
				pageSubtitle=	"Because it'll be awesome" 
				pageByline=		"Just Dowit" 
			/>
			<Section>
				<p><em>Analog.Cafe</em> is a collection of images, articles and photo essays. It is a fully curated and edited body of work that draws on the best and most interesting expressions from the film photography community and beyond. </p>
				
				<p><Link to="/asfasdf">broken link</Link></p>
				
				<Quote cite="A quote by some famous guy.">Anyone can submit images, photo essays and articles through the beautiful, easy to use web app. Featured images are listed in a special databas. Anyone can submit images, photo essays and articles through the beautiful, easy to use web app. Featured images are listed in a special databas</Quote>
				
				<p><em>Analog.Cafe</em> is a collection of images, articles and photo essays. It is a fully curated and edited body of work that draws on the best and most interesting expressions from the film photography community and beyond.</p>
				<p><em>Analog.Cafe</em> is a collection of images, articles and photo essays. It is a fully curated and edited body of work that draws on the best and most interesting expressions from the film photography community and beyond.</p>
				<p><em>Analog.Cafe</em> is a collection of images, articles and photo essays. It is a fully curated and edited body of work that draws on the best and most interesting expressions from the film photography community and beyond.</p>
				
				<Quote cite="A quote by some famous guy.">Short quote<b>bold</b></Quote>
			</Section>
		</Article>
	)
}