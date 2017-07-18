export function setData(data) {
	return {
		type: "SET_DATA",
		payload: data
	}
}

export function fetchSource(fetch) {
  return {
    type: "FETCH_SOURCE",
    payload: fetch
  }
}

export function setVisibility(isVisible) {
  return {
    type: "SET_VISIBILITY",
    payload: isVisible
  }
}
