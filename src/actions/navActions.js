export function setView(view) {
	return {
		type: "SET_VIEW",
		payload: view
	}
}

export function setLocation(location) {
  return {
    type: "SET_LOCATION",
    payload: location
  }
}
