// tools
import React from "react"
import axios from "axios"

// redux
import { connect } from "react-redux"
import defaultPostState from "./state.json"


// components
import { ModalCard, ModalWrapper } from "../../components/Card"

// return
class Modal extends React.Component {
  state = {
    style: {
      display: "block",
    },
    data: {
      title: "Loading Card...",
      image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      text: "",
      buttons: {},
    },
    source: {
      url: "/api/auth/email",
      method: "get"
    }
  }

  _fetch = () => {
  	let slug = this.state.source.url
		// fetch & update state
		if(this.state.source.url === slug) return
		axios({
		  method: 			this.state.source.method,
		  url: 					slug + ".json",
		})
			.then(response => {
				let data = response.data
				this.setState({
          data: {
  					title:				data.title,
  					image:				data.image,
  					text:					data.text,
  					buttons: 			data.buttons,
          },
          source: {
            url: slug,
          }
				})
			})
			.catch(error => console.log(error))
  }

  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()
	// need condition for componentWillUnmount()

  handleHideModal = () => {
    // this.setState({
    //   style: { display: "none" }
    // })
  }

  render() {
		return(
      <ModalWrapper style={ this.state.style }>
  			<ModalCard
  				title={ this.state.data.title  }
  				image={ this.state.data.image }
  				text={ this.state.data.text }
  				buttons={ this.state.data.buttons }

          hideModal={ this.handleHideModal.bind(this) }
          // callback for show/hide toggle from the card
  			/>
      </ModalWrapper>
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
