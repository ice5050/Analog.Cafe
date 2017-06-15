// tools
import React from "react"
import styled from "styled-components"

// components
import { ModalFetch } from "./components/ModalFetch"


// return
const A = styled.a`
	text-decoration: 	none;
	&:active u {
		background:			${ props => props.theme.color.highlight };
	}
`
const Wrapper = styled.div`
	display: 					inline;
	position:					relative;
	z-index: 					${ props => props.theme.layer.card };
`
export class ModalLink extends React.Component {
  state = { load: false }
  onClick(e){
    e.preventDefault()
    this.setState({ load: false })
    setTimeout(() => this.setState({ load: true }), 20)
  }
	render() {
    return (
    	<Wrapper>
				<A href="#card" onClick={ this.onClick.bind(this)} >{ this.props.children }</A>
				{ this.state.load && <ModalFetch {...this.props} /> }
      </Wrapper>
    )
  }
}