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
export function resetListPage() {
	return {
		type: "RESET_LIST_PAGE",
		payload: {}
	}
}

export function fetchListPage(request) { console.log("fetch")
  return dispatch => {
    dispatch(resetListPage())
    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => {
        console.log(response.data)
        dispatch(setListPage(response.data))
      })
      .catch(error => {
        setModalVisibility(true)
        setModalData({
          title: "Error 😧",
          text: error
        })
      })
  }
}
