// tools
import React from "react"

// styles
import { Card, Overlay, CardButton, CardCaption } from "../../../../components/Modal/styles"


// return
export class ModalCard extends React.Component {
	state = { show: true }
  handleClose(e){
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
					<figure style={{ height: this.props.image ? "inherit" : "0" }}>
						<img src={ this.props.image || "/images/app/placeholder.gif" } style={{ height: this.props.image ? "inherit" : "0" }} alt="Author profile" />
						<figcaption>
							<CardCaption style={{ padding: this.props.text ? "" : "0" }} >{ this.props.text || "" }</CardCaption>
						</figcaption>
					</figure>
					{
						this.props.buttons ?
						this.props.buttons.map(function(button, i) {
							return (
								<CardButton 
									to={ button.to || "/" } 
									key={ button.to }
									red={ button.red ? true : null }
								>{ button.text || "Analog.Cafe" }</CardButton>
							)
						}) : null
					}
				</Card>
			</Overlay>
		)
  }
}