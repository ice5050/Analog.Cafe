export function setData(data) {
	return {
		type: "SET_DATA",
		payload: data
	}
}

export function fetch(request) {
  return {
    type: "FETCH_REQUEST",
    payload: fetch
  }
}

export function setVisibility(isVisible) {
  return {
    type: "SET_VISIBILITY",
    payload: isVisible
  }
}
