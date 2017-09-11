// related constants
import { ROUTE_API_DOMAIN } from "./app"
import { ROUTE_USER_AUTH_SUCCESS } from "./user"

// api endpoints
export const ROUTE_SUBMISSION_API = ROUTE_API_DOMAIN + "/api/submissions"
export const ROUTE_UPLOAD_IMAGE_API =
  ROUTE_API_DOMAIN + "/api/submissions/upload"

// WebSocket
export const WEBSOCKET_UPLOAD_PROGRESS =
  process.env.REACT_APP_WEBSOCKET_UPLOAD_PROGRESS

// redirect rules
export const ROUTE_REDIRECT_AFTER_SUBMIT = ROUTE_USER_AUTH_SUCCESS
