import { APP_DESCRIPTION, ROUTE_API_DOMAIN } from "./app"

export { ROUTE_POST_DIR } from "./post"
export const ROUTE_LIST_API = ROUTE_API_DOMAIN + "/api/list"
export const ROUTE_AUTHENTICATED_LIST_API = "/api/auth/list"
export const ROUTE_FILTERS = {
  "/photo-essays": "photo-essay",
  "/articles": "review:how-to:editorial",
  "/my-stuff": "",
  "/": ""
}
export const ROUTE_META = {
  "/photo-essays": {
    text: "Stories told with images on film",
    emoji: "🌇🌃🌌"
    // photo-essay
  },
  "/articles": {
    text: "Reads of interest",
    // story
    // editorial
    // review
    // how-to
    emoji: "🌈"
  },
  "/": {
    text: APP_DESCRIPTION,
    emoji: "☕️",
    designation: "homepage"
  },
  "/author/*": {
    text: "Images and stories by ",
    emoji: "🤘"
  },
  default: {
    text: APP_DESCRIPTION,
    emoji: "🍩"
  }
}
