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
const NavWrapper = props => {
	return(
    <div>
      { props.nav.location.top
        && <Nav view={ props.nav.view } draftStatus={ props.composer.draftStatus } />
      }
        { props.children }
      { props.nav.location.bottom
        && <Nav view={ props.nav.view } draftStatus={ props.composer.draftStatus } />
      }
    </div>
  )
}

// connet with redux
const mapStateToProps = state => {
	return {
		nav: state.nav,
    composer: state.composer,
	}
}
export default connect(mapStateToProps)(NavWrapper)
