// tools
import React from "react"
import PropTypes from "prop-types"
import { Editor } from "slate"
import { initialState } from "./constants"

// components
import { Header } from "../../../components/Composer"
import { Section, Article } from "../../../components/Article"
//import { Wrapper } from "./styles"


// render
export class Composer extends React.Component {
	state = {
    state: initialState
  }
  onChange = (state) => {
    this.setState({ state })
  }
	render() {
		return (
			<Article>
				<Header />
				<Section>
					<Editor state={this.state.state} onChange={this.onChange} />
				</Section>
			</Article>
		)
	}
}

// declare
Editor.propTypes = {
	state: 				PropTypes.object,
	onChange:			PropTypes.func,
}