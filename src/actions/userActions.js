// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"
import { ROUTE_USER_API } from "../constants/user"
import { axiosRequest } from "./helpers"

// below: dispatch popup warning that user needs to log in or
// dispatch user's logged in credentials to store

export function getUser(request = { url: ROUTE_USER_API }) {
  return dispatch => {
    axios(axiosRequest(request))
      .then(response =>
        dispatch({
          type: "USER.GET_USER",
          payload: response.data
        })
      )
      .catch(error =>
        dispatch(
          setCard(
            {
              status: "ok",
              info: {
                title:
                  "Error: " +
                  (error.response ? error.response.status : "no response"),
                text: errorMessage.FAILED_LOGIN
              }
            },
            { url: "errors/user" }
          )
        )
      )
  }
}
