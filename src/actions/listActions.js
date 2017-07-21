// tools
import axios from "axios"
import {
  setVisibility as setModalVisibility,
  setData as setModalData,
} from "./modalActions"

// return
export function setStatus(status) {
	return {
		type: "SET_STATUS",
		payload: status
	}
}
export function setFilters(filters) {
	return {
		type: "SET_FILTERS",
		payload: filters
	}
}
export function setPagination(pagination) {
	return {
		type: "SET_PAGINATION",
		payload: pagination
	}
}
export function resetList() {
	return {
		type: "RESET_LIST",
		payload: {}
	}
}

export function fetchInsert(request) {
  return dispatch => {
    dispatch({
      type: "RESET_LIST",
  		payload: {}
    })
    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => {
        dispatch({
          type: "ADD_PAGE",
          payload: response.data.items,
        })
        dispatch({
          type: "SET_STATUS",
      		payload: response.data.status
        })
        dispatch({
          type: "SET_FILTERS",
      		payload: response.data.filters
        })
        dispatch({
          type: "SET_PAGINATION",
      		payload: response.data.page
        })
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
