// tools
import React from "react"
import axios from "axios"

// components
import Card from "./Card"

// state
import defaultPostState from "./state.json"


// return
export default class extends React.Component {
	state = defaultPostState

  _fetch = () => {
  	let slug = this.props.fetch
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
			<Card
				title={ this.state.name  }
				image={ this.state.image }
				text={ this.state.shortBio }
				buttons={ this.state.buttons }
				show={ this.props.show }
			/>
		)
	}
}
