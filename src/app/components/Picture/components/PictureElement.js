// tools
import React from "react"

// return
export default props => {
  const src = props.src
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

  return (
    // feature and non-feature images should have different set of sizes.
    // non-feature image doesn't need huge size
    // NOTE for the list we can also use just medium images max & small images on mobile
    <picture>
      {/* <source srcset="smaller.jpg" media="(max-width: 768px)">
        <source srcset="default.jpg"> */}
      <img srcSet={src} src={src} alt={alt} className={className} />
    </picture>
  )
}
