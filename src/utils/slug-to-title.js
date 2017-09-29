import toTitleCase from "titlecase"

export default slug => {
  let title = slug.substr(0, slug.lastIndexOf("-")) // get rid of slug id
  title = title.replace(/-/g, " ")
  return toTitleCase(title)
}
