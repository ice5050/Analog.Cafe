// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"

import { ROUTE_LIST_API } from "../constants/list"

// return
export function setPage(page, appendItems) {
  if(appendItems === false) return {
    type: "LIST.SET_PAGE",
    payload: page
  }
  else return {
    type: "LIST.ADD_PAGE",
    payload: page,
  }
}
export function initPage(state) {
	return {
		type: "LIST.INIT_PAGE",
		payload: state,
	}
}

export function fetchPage(request, appendItems = false) {
  return (dispatch, getState) => {

    // do not load anything outside of API scope
    if(!(request.url).includes(ROUTE_LIST_API)) return

    // get current state from store
    let listState = getState().list

    // do not load post twice in a arow
    console.log(listState.requested.url, request.url)
    if(listState.requested.url === request.url) return

    // reset list state (unless it's being paginated)
    !appendItems && dispatch(initPage({
      requested: request,
    }))

    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => dispatch(setPage(response.data, appendItems)))
      .catch(error =>
        dispatch(setCard({
          status: "ok",
          info: {
            title: "Error " + error.response.status,
            text: errorMessage.FAILED_LIST,
          }
        }, { url: "errors/list" }))
      )
  }
}
