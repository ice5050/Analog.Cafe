// constants
import { ROUTE_APP_PERMANENT_DOMAIN } from "../../../../constants/app"

export const parseHref = href => {
  let address = href || "#" // <-- with fallback
  address = address
    .replace("http://" + ROUTE_APP_PERMANENT_DOMAIN, "")
    .replace("https://" + ROUTE_APP_PERMANENT_DOMAIN, "")
    .replace("http://www." + ROUTE_APP_PERMANENT_DOMAIN, "")
    .replace("https://www." + ROUTE_APP_PERMANENT_DOMAIN, "")
  return address
}
