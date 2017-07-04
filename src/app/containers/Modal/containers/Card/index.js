// tools
import React from "react"

// styles
import { Card, CardButton, CardCaption, CardHeader } from "../../../../components/CardStyles"
import { Overlay } from "./styles"


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
					<CardHeader>
						<h3>{ this.props.title || "Hello!" }</h3>
						<a href="#close" onClick={ this.handleClose.bind(this)} >✕</a>
					</CardHeader>
					<figure>
						<img
							src={ this.props.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }
							style={{ height: this.props.image ? "inherit" : "0" }}
							alt="Card"
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
