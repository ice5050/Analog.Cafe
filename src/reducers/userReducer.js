import { ROUTE_AUTH_USER_LANDING } from "../constants/user"

const INITIAL_STATE = {
  status: "forbidden",
  info: {},
  routes: {
    success: ROUTE_AUTH_USER_LANDING
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER.GET_INFO":
      state = {
        ...state,
        ...action.payload
      }
      break
    case "USER.VERIFY":
      state = {
        ...state,
        status: action.payload
      }
      break
    case "USER.SET_ROUTES":
      state = {
        ...state,
        routes: action.payload
      }
      break
    case "USER.RESET_ROUTES":
      state = {
        ...state,
        routes: INITIAL_STATE.routes
      }
      break
    case "USER.RESET_STATE":
      state = INITIAL_STATE
      break
    default:
      return state
  }
  return state
}
