// tools
import axios from "axios"
import {
  setVisibility as setModalVisibility,
  setData as setModalData,
} from "./modalActions"

// return
export function setListPage(page) {
  return {
    type: "SET_LIST_PAGE",
    payload: page
  }
}
export function initListPage(request) {
	return {
		type: "INIT_LIST_PAGE",
		payload: request
	}
}

export function fetchListPage(request) {
  return (dispatch, getState) => {
    if(getState().list.requested.url === request.url) return
    dispatch(initListPage(request))
    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => dispatch(setListPage(response.data)))
      .catch(error => {
        setModalVisibility(true)
        setModalData({
          title: "Error 😧",
          text: error
        })
      })
  }
}
