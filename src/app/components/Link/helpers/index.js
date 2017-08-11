
// constants
import { ROUTE_APP_DOMAIN } from "../../../../constants/link"

export const parseHref = href => {
  let address = href || "#" // <-- with fallback
  address = address.replace("http://" + ROUTE_APP_DOMAIN,"")
    .replace("https://" + ROUTE_APP_DOMAIN,"")
    .replace("http://www." + ROUTE_APP_DOMAIN,"")
    .replace("https://www." + ROUTE_APP_DOMAIN,"")
  return address
}
