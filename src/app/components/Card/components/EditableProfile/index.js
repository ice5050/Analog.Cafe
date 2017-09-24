// tools
import React from "react"

// styles
import {
  CardFlattened,
  CardCaptionEditable,
  CardButtonEditable,
  CardHeaderEditable
} from "./styles"
import { SubtitleInput } from "../../../InputStyles"
import placeholder from "../../../_icons/images/placeholder-profile-upload.png"

// constants
import {
  SUMMARY_LENGTH_MAX,
  TITLE_LENGTH_MAX
} from "../../../../../constants/input"

// return
export default props => {
  return (
    <CardFlattened>
      <CardHeaderEditable>
        <SubtitleInput
          placeholder="Your Name"
          value={props.title || ""}
          maxLength={TITLE_LENGTH_MAX}
          autoFocus
          onChange={event => props.changeTitle(event)}
          warning={props.warningTitle}
        />
      </CardHeaderEditable>
      <figure>
        <img
          src={props.image || placeholder}
          alt="Profile avatar"
          onClick={() => props.changeImage()}
          style={{ cursor: "pointer" }}
        />
        <figcaption>
          <CardCaptionEditable
            maxLength={SUMMARY_LENGTH_MAX}
            placeholder="Your short author bio goes here."
            onChange={event => props.changeText(event)}
            value={props.text || ""}
            warning={props.warningText}
          />
        </figcaption>
      </figure>
      <CardButtonEditable
        value={props.buttonText || ""}
        placeholder="Website"
        maxLength={SUMMARY_LENGTH_MAX}
        onChange={event => props.changeButton(event)}
        onFocus={() => props.focusButton()}
        onBlur={() => props.blurButton()}
      />
    </CardFlattened>
  )
}
