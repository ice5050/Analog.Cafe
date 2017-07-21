// tools
import axios from "axios"
import {
  setVisibility as setModalVisibility,
  setData as setModalData,
} from "./modalActions"

// return
export function setListPage(page, appendItems) {
  console.log("setListPage",page, appendItems)
  if(appendItems === false) return {
    type: "SET_LIST_PAGE",
    payload: page
  }
  else return {
    type: "ADD_LIST_PAGE",
    payload: page
  }
}
export function initListPage(request) {
	return {
		type: "INIT_LIST_PAGE",
		payload: request
	}
}

export function fetchListPage(request, appendItems = false) {
  return (dispatch, getState) => {

    // run duplicate & validation checks
    let listState = getState().list
    if(listState.requested.url === request.url) return

    console.log(request.url, appendItems)

    dispatch(initListPage(request))
    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => dispatch(setListPage(response.data, appendItems)))
      .catch(error => {
        setModalVisibility(true)
        setModalData({
          title: "Error 😧",
          text: error
        })
      })
  }
}
