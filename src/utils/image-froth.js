const IMAGE_FROTH_SERVER =
  "https://res.cloudinary.com/analog-cafe/image/upload/"
const IMAGE_FROTH_OPTIONS = "c_scale,fl_progressive"
const IMAGE_FROTH_SIZES = {
  t: "200",
  s: "520",
  m: "1268",
  l: "1800"
}

// image-froth_1681956_9ad677d272a84ebc9360ad6199372f8b
export const froth = (src, size = "m", type = "jpg") => {
  let width = IMAGE_FROTH_SIZES[size]
  let height = ""
  let ratio = 0

  // extension is passed in through id:
  if (/[.]/.exec(src)) {
    type = src.split(".").pop() // log extension
    src = src.replace(/\.[^/.]+$/, "") // remove extension from file name
  }

  if (src.includes("image-froth") && !src.includes("/")) {
    src =
      IMAGE_FROTH_SERVER +
      IMAGE_FROTH_OPTIONS +
      ",w_" +
      width +
      "/" +
      src +
      "." +
      type
    ratio =
      src
        .split("image-froth_")
        .pop()
        .split("_")
        .shift() / 1000000
    height = Math.round(width / ratio, 1)
  }
  return {
    src,
    type,
    ratio,
    width,
    height
  }
}
