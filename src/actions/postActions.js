// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"

// return
export function setPage(page) {
  return {
    type: "POST.SET_PAGE",
    payload: page["data"]
  }
}
export function initPage(state) {
	return {
		type: "POST.INIT_PAGE",
		payload: state,
	}
}

export function fetchPage(request) {
  return (dispatch, getState) => {

    // pre-cook post title, when available:
    let postState = getState().post
    dispatch(initPage({
      requested: request,
      title: postState.title,
    }))

    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url,
    })
      .then(response => dispatch(setPage(response.data)))
      .catch(error =>
        dispatch(setCard({
          status: "ok",
          info: {
            title: "Error " + error.response.status + " 😧",
            text: errorMessage.FAILED_POST,
          }
        }, { url: "errors/post" }))
      )
  }
}
