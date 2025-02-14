// tools
import React from "react"
import { froth } from "../../../utils/image-froth"
import { PicturePlaceholder } from "../Picture/components/PicturePlaceholder"

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
        <PicturePlaceholder frothId={props.image}>
          <img src={froth({ src: props.image, size: "s" }).src} alt="Card" />
        </PicturePlaceholder>
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
