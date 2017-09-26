// tools
import React from "react"
import { froth } from "../../../../utils/image-froth"

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
    <div
      style={{
        paddingBottom: Math.round(100 / froth(src).ratio, 3) + "%",
        background: "#EEE",
        height: "0",
        position: "relative"
      }}
    >
      <picture
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          position: "absolute"
        }}
      >
        {/* WebP */}
        <source
          // mobile image size
          srcSet={froth(src, "s", "webp").src}
          media="(max-width: 480px)"
          type="image/webp"
        />
        <source
          // medium image size, largest for all images that aren't "features"
          srcSet={froth(src, "m", "webp").src}
          media="(max-width: 1200px)"
          type="image/webp"
        />
        <source
          // max image size, extra large only if it's a "feature"
          srcSet={froth(src, largestSize, "webp").src}
          media="(min-width: 1201px)"
          type="image/webp"
        />

        {/* JPG */}
        <source
          // mobile image size
          srcSet={froth(src, "s").src}
          media="(max-width: 480px)"
          type="image/jpeg"
        />
        <source
          // medium image size, largest for all images that aren't "features"
          srcSet={froth(src, "m").src}
          media="(max-width: 1200px)"
          type="image/jpeg"
        />
        <source
          // max image size, extra large only if it's a "feature"
          srcSet={froth(src, largestSize).src}
          media="(min-width: 1201px)"
          type="image/jpeg"
        />
        <img
          // default image size
          src={froth(src, "m").src}
          alt={alt}
          className={className}
          style={{ height: "100%" }}
        />
      </picture>
    </div>
  )
}
