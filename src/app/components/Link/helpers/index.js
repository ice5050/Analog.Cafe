// constants
import { ROUTE_APP_PERMANENT_DOMAIN_NAME } from "../../../../constants/app"

export const parseHref = href => {
  let address = href || "#" // <-- with fallback
  address = address
    .replace("http://" + ROUTE_APP_PERMANENT_DOMAIN_NAME, "")
    .replace("https://" + ROUTE_APP_PERMANENT_DOMAIN_NAME, "")
    .replace("http://www." + ROUTE_APP_PERMANENT_DOMAIN_NAME, "")
    .replace("https://www." + ROUTE_APP_PERMANENT_DOMAIN_NAME, "")
  return address
}
