// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import { VisitorNav, ComposerNav, Wrapper } from "../components/Nav"

// render
const Nav = props => {
  if(props.top && !props.nav.location.top) return null
  if(props.bottom && !props.nav.location.bottom) return null
	return(
    <Wrapper>
      {
        props.nav.view === "COMPOSER" ?
          <ComposerNav draftStatus={ props.composer.draftStatus } /> : <VisitorNav />
      }
    </Wrapper>
  )
}

// connet with redux
const mapStateToProps = state => {
	return {
		nav: state.nav,
    composer: state.composer,
	}
}
export default connect(mapStateToProps)(Nav)
