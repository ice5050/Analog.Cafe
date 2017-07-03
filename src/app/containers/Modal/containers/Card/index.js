// tools
import React from "react"

// styles
import { Card, Overlay, CardButton, CardCaption } from "./styles"


// return
export default class extends React.Component {

	state = { show: true }
  handleClose = e => {
  	e.preventDefault()
  	this.setState({ show: false })
  }

	render() {
    return (
			<Overlay show={ this.state.show } onClick={ this.handleClose.bind(this)} >
				<Card>
					<header>
						<h3>{ this.props.title || "Hello!" }</h3>
						<a href="#close" onClick={ this.handleClose.bind(this)} >✕</a>
					</header>
					<figure>
						<img
							src={ this.props.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }
							style={{ height: this.props.image ? "inherit" : "0" }}
							alt="Author profile"
						/>
						<figcaption>
							<CardCaption style={{ padding: this.props.text ? "" : "0" }} >{ this.props.text || "" }</CardCaption>
						</figcaption>
					</figure>
					{
						this.props.buttons &&
						this.props.buttons.map(function(button, i) {
							return (
								<CardButton
									to={ button.to || "/" }
									key={ button.to }
									red={ button.red ? true : null }
								>{ button.text || "Analog.Cafe" }</CardButton>
							)
						})
					}
				</Card>
			</Overlay>
		)
  }
}
