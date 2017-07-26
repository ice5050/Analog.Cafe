// tools
import React from "react"

// redux
import { connect } from "react-redux"


// components
import { CommonNav, ComposerNav, Wrapper } from "../components/Nav"

// render
const Nav = props => {
  console.log(props.user)
  if(props.top && !props.nav.location.top) return null
  if(props.bottom && !props.nav.location.bottom) return null
	return(
    <Wrapper>
      {
        props.nav.view === "COMPOSER"
          ? <ComposerNav draftStatus={ props.composer.draftStatus } />
          : <CommonNav userStatus={ props.user.status } />
      }
    </Wrapper>
  )
}

// connet with redux
const mapStateToProps = state => {
	return {
		nav: state.nav,
    composer: state.composer,
    user: state.user,
	}
}

export default connect(mapStateToProps)(Nav)
