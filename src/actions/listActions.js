// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"

import { ROUTE_LIST_API, ROUTE_AUTHENTICATED_LIST_API } from "../constants/list"

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
    if(
      !(request.url).includes(ROUTE_LIST_API)
      && !(request.url).includes(ROUTE_AUTHENTICATED_LIST_API)
    ) return

    // get current state from store
    let listState = getState().list

    // do not load post twice in a arow
    if(
      (listState.requested.url === request.url) &&
      (listState.requested.data.tag === request.data.tag) &&
      (listState.requested.data.author === request.data.author) &&
      (listState.requested.data.page === request.data.page)
    ) return

    // reset list state (unless it's being paginated)
    if(!appendItems)
      dispatch(initPage({
        requested: request,
      }))

    axios({
      method: 			request.method || "get",
      params:         request.data || {},
      url: 					request.url,
    })
      .then(response => {
        response.data.page["items-total"] > 0
        ? dispatch(setPage(response.data, appendItems))
        : dispatch(setCard({
          status: "ok",
          info: {
            title: "Error 204",
            text: errorMessage.EMPTY_LIST,
          }
        }, { url: "errors/list" }))
      })
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
