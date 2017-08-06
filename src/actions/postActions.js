// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"

import { ROUTE_POST_API } from "../constants/post"

// return
export function setPage(page) {
  return {
    type: "POST.SET_PAGE",
    payload: page
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

    // do not load anything outside of API scope
    if(!(request.url).includes(ROUTE_POST_API)) return

    // get current state from store
    let postState = getState().post

    // do not load post twice in a arow
    if(postState.requested.url === request.url) return

    // pre-cook post title, when available
    dispatch(initPage({
      requested: request,
      title: postState.title,
    }))

    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => dispatch(setPage(response.data)))
      .catch(error =>
        dispatch(setCard({
          status: "ok",
          info: {
            title: "Error " + error.response.status,
            text: errorMessage.FAILED_POST,
          }
        }, { url: "errors/post" }))
      )
  }
}
