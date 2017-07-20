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
      { props.view === "COMPOSER" && <ComposerNav draftStatus={ props.draftStatus } /> }
    </Wrapper>
  )
}
class NavWrapper extends React.Component {
  render() {
		return(
      <div>
        { this.props.nav.location.top
          && <Nav view={ this.props.nav.view } draftStatus={ this.props.composer.draftStatus } />
        }
          { this.props.children }
        { this.props.nav.location.bottom
          && <Nav view={ this.props.nav.view } draftStatus={ this.props.composer.draftStatus } />
        }
      </div>
    )
	}
}

// connet with redux
const mapStateToProps = state => {
	return {
		nav: state.nav,
    composer: state.composer,
	}
}
export default connect(mapStateToProps, null, null, {pure: false})(NavWrapper)
