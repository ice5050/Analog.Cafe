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
		let modalDelay = setTimeout(() => {
			dispatch(initModal(request))
			dispatch({
				type: "SET_MODAL",
				payload: info,
			})
			clearTimeout(modalDelay)
		}, 100)
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
			.catch(error => dispatch(setModal({
				status: "ok",
				info: {
					title: "Error 😧",
					text: "Couldn’t load the card. Are you connected to the Internet?",
				}
			}, { url: "errors/modal" }))
		)
	}
}
