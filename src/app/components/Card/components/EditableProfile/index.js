// tools
import React from "react"

// styles
import { CardHeader } from "../../styles"
import {
  CardFlattened,
  CardCaptionEditable,
  CardButtonEditable
} from "./styles"
import { SubtitleInput } from "../../../InputStyles"
import placeholder from "../../../_icons/images/placeholder-profile-upload.png"

// constants
import {
  SUMMARY_LENGTH_MAX,
  TITLE_LENGTH_OPTIMAL
} from "../../../../../constants/input"

// return
export default props => {
  return (
    <CardFlattened>
      <CardHeader>
        <SubtitleInput
          placeholder="Your Name"
          value={props.title}
          maxLength={TITLE_LENGTH_OPTIMAL}
          autoFocus
          onChange={event => props.changeTitle(event)}
        />
      </CardHeader>
      <figure>
        <img src={props.image || placeholder} alt="Profile avatar" />
        {/* Image upload hidden input */}
        <input
          type="file"
          accept="image/x-png,image/jpeg"
          style={{ display: "none" }}
        />

        <figcaption>
          <CardCaptionEditable
            maxLength={SUMMARY_LENGTH_MAX}
            placeholder="Your short author bio goes here."
            onChange={event => props.changeText(event)}
          >
            {props.text}
          </CardCaptionEditable>
        </figcaption>
      </figure>
      <CardButtonEditable
        value={props.buttonText}
        placeholder="Website"
        maxLength={SUMMARY_LENGTH_MAX}
        onChange={event => props.changeButton(event)}
        onFocus={() => props.focusButton()}
        onBlur={() => props.blurButton()}
      />
    </CardFlattened>
  )
}
