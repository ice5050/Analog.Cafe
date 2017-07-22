// tools
import axios from "axios"

// return
export function initModal(request) {
	return {
		type: "INIT_MODAL",
		payload: request,
	}
}
export function hideModal() {
	return {
		type: "HIDE_MODAL",
		payload: {},
	}
}

export function setModal(info, request) {
	return dispatch => {
		dispatch(initModal(request))
		dispatch({
			type: "SET_MODAL",
			payload: info,
		})
	}
}
export function fetchModal(request) {
	return dispatch => {
		dispatch(initModal(request))
		axios({
			  method: 			request.method || "get",
	      data:         request.data || {},
			  url: 					request.url + ".json",
			})
			.then(response => dispatch(setModal(response.data, request)))
			.catch(error => dispatch(
				setModal({
					title: "Error 😧",
					text: error,
				}, request)
			))
	}
}
