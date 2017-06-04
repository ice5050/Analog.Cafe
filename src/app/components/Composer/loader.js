// tools

// state
import defaultState from "./state.json"


// return
export const content = () => {
	let local = localStorage.getItem("composer-state")
	try { return local ? JSON.parse(local) : defaultState }
	catch (e) { return defaultState }
}