// tools
import React from "react"

// components
import Fetch from "./containers/Fetch"

// styles
import { Anchor, Wrapper } from "./styles"

// return
export default class extends React.Component {
  state = { load: false }
  handleClick = e => {
    e.preventDefault()
    this.setState({ load: false })
    setTimeout(() => this.setState({ load: true }), 20)
  }
	render() {
    return (
    	<Wrapper>
				<Anchor href="#card" onClick={ this.handleClick.bind(this) } >{ this.props.children }</Anchor>
				{ this.state.load && <Fetch { ...this.props } /> }
      </Wrapper>
    )
  }
}
