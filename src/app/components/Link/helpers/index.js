// constants
import { ROUTE_APP_PRODUCTION_DOMAIN_NAME } from "../../../../constants/app"
const apexName = ROUTE_APP_PRODUCTION_DOMAIN_NAME.replace("www.", "")

export const parseHref = href => {
  let address = href || "#" // <-- with fallback
  address = address
    .replace("http://" + apexName, "")
    .replace("https://" + apexName, "")
    .replace("http://www." + apexName, "")
    .replace("https://www." + apexName, "")
  return address
}
