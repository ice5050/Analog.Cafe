// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import { VisitorNav, ComposerNav, Wrapper } from "../components/Nav"

// render
const Nav = props => {
  return(
    <Wrapper>
      { props.view === "VISITOR" &&  <VisitorNav /> }
      { props.view === "COMPOSER" && <ComposerNav /> }
    </Wrapper>
  )
}
class NavWrapper extends React.Component {
  render() {
		return(
      <div>
        { this.props.location.top && <Nav view={ this.props.view } /> }
          { this.props.children }
        { this.props.location.bottom && <Nav view={ this.props.view } /> }
      </div>
    )
	}
}

// connet with redux
const mapStateToProps = state => {
	return {
		view: state.nav.view,
    location: state.nav.location,
	}
}
export default connect(mapStateToProps)(NavWrapper)
