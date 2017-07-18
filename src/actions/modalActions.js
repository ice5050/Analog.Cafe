export function setData(data) {
	return {
		type: "SET_DATA",
		payload: data
	}
}

export function fetch(request) {
  // return {
  //   type: "FETCH_REQUEST",
  //   payload: fetch
  // }
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type: "SET_DATA",
				payload: { title: "Loading..."}
			})
		}, 2000)
	}
}

export function setVisibility(isVisible) {
  return {
    type: "SET_VISIBILITY",
    payload: isVisible
  }
}
