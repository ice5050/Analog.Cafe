// tools
import React from "react"

// styles
import {
  Card as CardElement,
  CardButton,
  CardCaption,
  CardHeader
} from "./styles"

// return
export const Card = props => {
  return (
    <CardElement style={props.style}>
      <CardHeader title={props.error && props.error}>
        <h3 onClick={event => event.stopPropagation()}>
          {props.title}
        </h3>
        <a href="#close" onClick={event => event.preventDefault()}>
          ✕
        </a>
      </CardHeader>
      <figure onClick={event => event.stopPropagation()}>
        <img
          src={
            props.image ||
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          }
          style={{
            display: typeof props.image === "undefined" ? "none" : "initial"
          }}
          alt="Card"
        />
        <figcaption>
          <CardCaption
            style={{ padding: typeof props.text === "undefined" ? "0" : "" }}
          >
            {props.text}
          </CardCaption>
        </figcaption>
      </figure>
      {props.buttons &&
        Object.keys(props.buttons).length !== 0 &&
        props.buttons.map(function(button, i) {
          return (
            <CardButton
              to={button.to}
              key={button.to}
              red={button.red ? true : null}
            >
              {button.text}
            </CardButton>
          )
        })}
    </CardElement>
  )
}

export { CardModal, ModalOverlay } from "./components/Modal"
export { default as CardEditableProfile } from "./components/EditableProfile"
