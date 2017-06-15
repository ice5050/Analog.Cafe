// tools
import React from "react"
import axios from "axios"

// components
import { Modal } from "../../components/Modal"

// state
import defaultPostState from "./state.json"


// return
export class ModalFetch extends React.Component {
	state = defaultPostState
  
  _fetch = () => {
  	let slug = this.props.fetch
  	console.log(slug)
		// fetch & update state
		if(this.state.slug === slug) return
  	axios.get(slug + ".json")
			.then(response => {
				let data = response.data
				this.setState({
					status: 			data.status,
					name:					data.name,
					image:				data.image,
					shortBio:			data["bio-short"],
					slug,
					buttons: 	data.buttons,
				})
			})
			.catch(error => console.log(error))
  }
  
  componentDidMount = () => this._fetch()
  componentDidUpdate = () => this._fetch()
	// need condition for componentWillUnmount()
  
  render() {
		return(
			<Modal
				title={ this.state.name  }
				image={ this.state.image }
				text={ this.state.shortBio }
				buttons={ this.state.buttons }
			/>
		)
	}
}

export const ModalConductor = props => {
	return props.load ? <ModalFetch {...props} /> : null
}






// declare
// Header.propTypes = {
// 	pageTitle: 		PropTypes.string.isRequired,
// 	pageSubtitle: PropTypes.string,
// 	pageByline: 	PropTypes.string,
// 	children: 		PropTypes.element,
// }