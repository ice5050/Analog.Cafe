// tools
import React from "react"

// return
export default props => {
  const src = props.src
  const alt = props.alt
  const className = props.className

  return (
    <picture>
      {/* <source srcset="smaller.jpg" media="(max-width: 768px)">
        <source srcset="default.jpg"> */}
      <img srcSet={src} alt={alt} className={className} />
    </picture>
  )
}
