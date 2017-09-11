// global properties for the app domain and key product names
export const ROUTE_APP_PRODUCTION_DOMAIN_NAME = "www.analog.cafe"
export const ROUTE_APP_PRODUCTION_DOMAIN_PROTOCOL = "https://"
export const APP_NAME = "Analog.Cafe"
export const APP_DESCRIPTION = "A film photography publication"

// api location
export const WEBSOCKET_UPLOAD_PROGRESS =
  process.env.REACT_APP_WEBSOCKET_UPLOAD_PROGRESS
export const WEBSOCKET_AUTHEN_TOKEN =
  process.env.REACT_APP_WEBSOCKET_AUTHEN_TOKEN
export const ROUTE_API_DOMAIN = process.env.REACT_APP_API_DOMAINSS

// NOTE: this doesn't work yet
export const ROUTE_APP_CURRENT_DOMAIN = window.location.hostname

// Google Analytics
export const APP_TRACKING_GAID = "UA-91374353-3"
