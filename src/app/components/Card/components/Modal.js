// tools
import React from "react"
import axios from "axios"

// styles
import { Card, CardButton, CardCaption, CardHeader } from "../styles"
export { ModalOverlay } from "./styles"

// return
export const ModalCard = props => {
  return (
		<Card style={{
			margin: "5vh auto 90.1vh", // 90.1vh is required for iOS to be scrollable
		}}>
			<CardHeader>
				<h3 onClick={ event => event.stopPropagation() }>{ props.title }</h3>
				<a href="#close" onClick={ event => event.preventDefault() }>✕</a>
			</CardHeader>
			<figure onClick={ event => event.stopPropagation() }>
				<img
					src={ props.image || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" }
					style={{ display: typeof props.image === "undefined" ? "none" : "initial" }}
					alt="Card"
				/>
				<figcaption>
					<CardCaption
						style={{ padding: typeof props.text === "undefined" ? "0" : "" }}
					>{ props.text }</CardCaption>
				</figcaption>
			</figure>
			{
				props.buttons &&
				Object.keys(props.buttons).length !== 0 &&
				props.buttons.map(function(button, i) {
					return (
						<CardButton
              onClick={
                function() {
                  if(button.request){
                    axios({
                      method: 	button.request.method || "get",
                      data:     button.request.data || {},
                      params:   button.request.params || {},
                      url: 		  button.request.url,
                      headers: 			{
                        Authorization: "JWT " + localStorage.getItem('token')
                      }
                    })
                    .then(() => {})
                    .catch(error => {
                      console.log(error)
                    })
                  }
                }
              }
							to={ button.to }
							key={ button.to }
							red={ button.red ? true : null }
						>{ button.text }</CardButton>
					)
				})
			}
		</Card>
	)
}
