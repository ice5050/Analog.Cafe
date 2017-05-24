// tools
import React from "react"

// components
import { Header } from "../../../components/Composer"
import { Section, Article } from "../../../components/Article"
import { Wrapper } from "./styles"


// render
export class Composer extends React.Component {
	render() {
		return (
			<Article>
			<Header 
				pageTitle="Submit your shit" 
				pageSubtitle="Because it'll be awesome" 
				pageByline="Just Dowit" 
			/>

				<Section>
					<span onClick={ this.makeBold.bind(this) }>[Bold]</span> <span onClick={ this.makeItalic.bind(this) }>[Italic]</span>

					<Wrapper>
						
					</Wrapper>
					
				</Section>
			</Article>
		)
	}
}
