// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"
import { ROUTE_USER_API } from "../constants/user"

// error message
const loginError = {
  status: "ok",
  info: {
    title: errorMessage.VIEW_TEMPLATE.CARD.title,
    text: errorMessage.DISAMBIGUATION.CODE_401.error
  }
}

// check if user is logged in
export const verify = () => {
  return dispatch => {
    const status = localStorage.getItem("token") ? "ok" : "forbidden"
    dispatch({
      type: "USER.VERIFY",
      payload: status
    })
  }
}

// remove token from local storage
export const forget = () => {
  return dispatch => {
    localStorage.removeItem("token")
    dispatch({
      type: "USER.RESET_STATE",
      payload: null
    })
  }
}

// get user data matched to login credentials
export const getInfo = () => {
  return dispatch => {
    const token = localStorage.getItem("token")
    if (!token) dispatch(setCard(loginError, { url: "errors/user" }))
    else {
      dispatch({
        type: "USER.SET_INFO",
        payload: {
          title: "Getting Your Info…"
        }
      })
      axios({
        method: "get",
        headers: {
          Authorization: "JWT " + token
        },
        url: ROUTE_USER_API
      })
        .then(response =>
          dispatch({
            type: "USER.SET_INFO",
            payload: response.data.data
          })
        )
        .catch(error => dispatch(setCard(loginError, { url: "errors/user" })))
    }
  }
}

// set user routes, notably redirect after login url
export const setRoutes = routes => {
  return {
    type: "USER.SET_ROUTES",
    payload: routes
  }
}
export const resetRoutes = () => {
  return {
    type: "USER.RESET_ROUTES"
  }
}
