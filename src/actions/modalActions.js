// tools
import axios from "axios"

// return
export function setData(data) {
	return {
		type: "SET_DATA",
		payload: data
	}
}

export function fetch(request) {
	return dispatch => {
		dispatch({
			type: "SET_DATA",
			payload: { title: "Loading Card..."}
		})
		axios({
			  method: 			request.method || "get",
	      data:         request.data || {},
			  url: 					request.url + ".json",
			})
			.then(response => {
				dispatch({
					type: "SET_DATA",
					payload: response.data,
				})
			})
			.catch(error => {
				dispatch({
					type: "SET_DATA",
					payload: {
						title: "Error 😧",
						text: error
					}
				})
			})
	}
}

export function setVisibility(isVisible) {
  return {
    type: "SET_VISIBILITY",
    payload: isVisible
  }
}
