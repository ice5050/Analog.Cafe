// tools
import React from "react"
import axios from "axios"

// redux
import { connect } from "react-redux"
import defaultPostState from "./state.json"


// components
import Card from "./containers/Card"

// styles
import { Wrapper } from "./styles"

// return
class Modal extends React.Component {
	state = {
    display: "none",
    data: {
      title : "Loading Card..."
    }
  }

  _fetch = () => {
  	let slug = this.props.fetch
		// fetch & update state
		if(this.state.slug === slug) return
		axios({
		  method: 			this.props.method || "get",
		  url: 					slug + ".json",
		  data:					this.props.data || "",
		})
			.then(response => {
				let data = response.data
				this.setState({
					title:				data.title,
					image:				data.image || this.props.image,
					text:					data.text,
					slug,
					buttons: 			data.buttons,
				})
			})
			.catch(error => console.log(error))
  }

  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()
	// need condition for componentWillUnmount()

  render() {
		return(
      <Wrapper style={{ display: this.state.display }}>
  			<Card
  				title={ this.state.title  }
  				image={ this.state.image }
  				text={ this.state.text }
  				buttons={ this.state.buttons }
  				show={ this.props.show }
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
