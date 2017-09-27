// tools
import React from "react"
import { froth } from "../../../../../utils/image-froth"

// styles
import { CardFlattened, CardCaption } from "../../styles"
import { CardHeaderSocial, CardSocialButton } from "./styles"
import { PicturePlaceholder } from "../../../../components/Picture/components/PicturePlaceholder"

// return
export default props => {
  return (
    <CardFlattened>
      <CardHeaderSocial>
        <h3>Share</h3>
      </CardHeaderSocial>
      <figure>
        {props.image && (
          <PicturePlaceholder frothId={props.image}>
            <img src={froth(props.image, "s").src} alt="Card" />
          </PicturePlaceholder>
        )}
        <figcaption>
          <CardCaption>Some text goes here</CardCaption>
        </figcaption>
      </figure>
      <CardSocialButton>Hello</CardSocialButton>
    </CardFlattened>
  )
}
