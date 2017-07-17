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
			<Overlay onClick={ this.handleClose.bind(this)} >
				<Card>
					<CardHeader>
						<h3>{ this.props.title }</h3>
						<a href="#close" onClick={ this.handleClose.bind(this)} >✕</a>
					</CardHeader>
					<figure>
						<img
							src={ this.props.image }
							style={{ height: this.props.image ? "inherit" : "0" }}
							alt="Card"
						/>
						<figcaption>
							<CardCaption style={ this.props.text === "" && { padding: "0" } } >{ this.props.text }</CardCaption>
						</figcaption>
					</figure>
					{
						Object.keys(this.props.buttons).length !== 0 &&
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
