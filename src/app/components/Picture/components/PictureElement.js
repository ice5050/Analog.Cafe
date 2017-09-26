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
    // feature and non-feature images should have different set of sizes.
    // non-feature image doesn't need huge size
    // NOTE for the list we can also use just medium images max & small images on mobile
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
        {/* <source srcset="smaller.jpg" media="(max-width: 768px)">
        <source srcset="default.jpg"> */}
        <source srcSet={froth(src, "s").src} media="(max-width: 480px)" />
        <source srcSet={froth(src, "m").src} media="(max-width: 1200px)" />
        <source
          srcSet={froth(src, largestSize).src}
          media="(min-width: 1201px)"
        />
        <img
          src={froth(src, "m").src}
          alt={alt}
          className={className}
          style={{ height: "100%" }}
        />
      </picture>
    </div>
  )
}
