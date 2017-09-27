// tools
import React from "react"
import { froth } from "../../../../utils/image-froth"
import LazyLoad from "react-lazyload"

import { PicturePlaceholder } from "./PicturePlaceholder"
// return
export default props => {
  let src = props.src
  const className = props.className

  const classFeature = "Featured image"
  const classNofeature = "Supporting image"
  const by = " by "

  let alt
  if (props.alt) alt = props.alt
  else if (props.author && props.author.name)
    alt = props.feature
      ? classFeature + by + props.author.name
      : classNofeature + by + props.author.name
  else alt = props.feature ? classFeature : classNofeature

  let largestSize = props.feature ? "l" : "m"

  return (
    <PicturePlaceholder preserve frothId={src}>
      <picture>
        {froth(src, "s", "webp").type === "webp" && (
          <source
            // mobile image size
            srcSet={froth(src, "s", "webp").src}
            media="(max-width: 480px)"
            type="image/webp"
          />
        )}
        {froth(src, "s", "webp").type === "webp" && (
          <source
            // medium image size, largest for all images that aren't "features"
            srcSet={froth(src, "m", "webp").src}
            media="(max-width: 1200px)"
            type="image/webp"
          />
        )}
        {froth(src, "s", "webp").type === "webp" && (
          <source
            // max image size, extra large only if it's a "feature"
            srcSet={froth(src, largestSize, "webp").src}
            media="(min-width: 1201px)"
            type="image/webp"
          />
        )}

        {/* JPG */}
        <source
          // mobile image size
          srcSet={froth(src, "s").src}
          media="(max-width: 480px)"
        />
        <source
          // medium image size, largest for all images that aren't "features"
          srcSet={froth(src, "m").src}
          media="(max-width: 1200px)"
        />
        <source
          // max image size, extra large only if it's a "feature"
          srcSet={froth(src, largestSize).src}
          media="(min-width: 1201px)"
        />
        <LazyLoad unmountIfInvisible once offset={300} height={"100%"}>
          <img
            // default image size
            src={froth(src, "m").src}
            alt={alt}
            className={className}
            style={{ height: froth(src).ratio ? "100%" : "initial" }}
          />
        </LazyLoad>
      </picture>
    </PicturePlaceholder>
  )
}
