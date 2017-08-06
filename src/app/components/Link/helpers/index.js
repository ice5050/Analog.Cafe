
// constants
import { DOMAIN_NAME } from "../../../../constants/link"

export const parseHref = href => {
  let address = href || "#" // <-- with fallback
  address = address.replace("http://" + DOMAIN_NAME,"")
    .replace("https://" + DOMAIN_NAME,"")
    .replace("http://www." + DOMAIN_NAME,"")
    .replace("https://www." + DOMAIN_NAME,"")
  return address
}
