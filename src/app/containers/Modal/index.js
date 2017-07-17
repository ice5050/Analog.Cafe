// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import Fetch from "./containers/Fetch"

// styles
import { Wrapper } from "./styles"

// return
class Modal extends React.Component {
  state = { load: false }
	render() {
    return (
    	<Wrapper>
        <Fetch
          style={ this.state.load ? { display: "block" } : { display: "none" }  }
          fetch={
            { title : "Loading Card..." }
          }
        />
      </Wrapper>
    )
  }
}


// connet with redux
const mapStateToProps = state => {
	return {
		// view: state.nav.view,
    // location: state.nav.location,
    // saveStatus: state.composer.saveStatus,
	}
}
export default connect(mapStateToProps)(Modal)



// title="Sign in with Email"
// image={ banner }
// fetch={ "/api/auth/email" }
// // method="post"
// data={{ email: this.state.email }}
