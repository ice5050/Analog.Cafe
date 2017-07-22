// tools
import axios from "axios"
import { setModal } from "./modalActions"

// return
export function setPage(page) {
  return {
    type: "SET_PAGE",
    payload: page
  }
}
export function initPage(request) {
	return {
		type: "INIT_PAGE",
		payload: request,
	}
}

export function fetchPage(request) {
  return (dispatch, getState) => {

    // run duplicate & validation checks
    let listState = getState().list
    if(listState.requested.url === request.url) return
    dispatch(initPage(request))

    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => dispatch(setPage(response.data)))
      .catch(error =>
        dispatch(setModal({
          status: "ok",
          info: {
            title: "Error 😧",
            text: "Couldn’t load the post. Are you connected to the Internet?",
          }
        }, { url: "errors/post" }))
      )
  }
}
