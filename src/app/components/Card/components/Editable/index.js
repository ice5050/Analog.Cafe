// tools
import React from "react"

// styles
import { CardButton, CardHeader } from "../../styles"
import { CardFlattened, CardCaptionEditable } from "./styles"
import { SubtitleInput } from "../../../InputStyles"

// return
export const CardEditable = props => {
  return (
    <CardFlattened>
      <CardHeader>
        <SubtitleInput
          value={props.title}
          maxLength="32"
          autoFocus
          // onChange={event => props.EditName(event)}
        />
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
          alt="Profile avatar"
        />
        {/* Image upload hidden input */}
        <input
          type="file"
          accept="image/x-png,image/jpeg"
          style={{ display: "none" }}
        />

        <figcaption>
          <CardCaptionEditable maxLength="250">
            {props.text}
          </CardCaptionEditable>
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
    </CardFlattened>
  )
}
