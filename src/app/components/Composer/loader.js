// tools

// state
import defaultState from "./state.json"


// return
export const content = () => {
	let local = localStorage.getItem("composer-state")
	try { return JSON.parse(local) }
	catch (e) { return defaultState }
}