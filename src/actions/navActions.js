export function setView(view) {
	return {
		type: "NAV.SET_VIEW",
		payload: view
	}
}

export function setLocation(location) {
  return {
    type: "NAV.SET_LOCATION",
    payload: location
  }
}
