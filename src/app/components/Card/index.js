// tools
import React from "react"
import { froth } from "../../../utils/image-froth"

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
        <h3 onClick={event => event.stopPropagation()}>{props.title}</h3>
        {// Stubborn popup shows no close button but requires buttons within
        !(
          props.stubborn &&
          props.buttons &&
          Object.keys(props.buttons).length !== 0
        ) ? (
          <a href="#close" onClick={event => event.preventDefault()}>
            ✕
          </a>
        ) : null}
      </CardHeader>
      <figure onClick={event => event.stopPropagation()}>
        <div
          style={{
            paddingBottom: Math.round(100 / froth(props.image).ratio, 3) + "%",
            background: "#EEE",
            height: froth(props.image).ratio ? "0" : "initial",
            position: "relative",
            display: !froth(props.image).ratio ? "none" : "block"
          }}
        >
          <img
            src={froth(props.image, "s").src}
            style={{
              display: typeof props.image === "undefined" ? "none" : "block",
              height: froth(props.image).ratio ? "100%" : "initial",
              position: froth(props.image).ratio ? "absolute" : "static"
            }}
            alt="Card"
          />
        </div>
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
              onClick={button.onClick}
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
