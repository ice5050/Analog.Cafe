// tools
import axios from "axios"
import { setModal } from "./modalActions"

// return
export function setPage(page, appendItems) {
  if(appendItems === false) return {
    type: "SET_PAGE",
    payload: page
  }
  else return {
    type: "ADD_PAGE",
    payload: page,
  }
}
export function initPage(request) {
	return {
		type: "INIT_PAGE",
		payload: request,
	}
}

export function fetchPage(request, appendItems = false) {
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
      .then(response => dispatch(setPage(response.data, appendItems)))
      .catch(error => {
        setModal({
          title: "Error 😧",
          text: error,
        }, { url: "error" })
      })
  }
}
