// tools

// state
import defaultContentState from "../containers/ContentEditor/state.json"
import defaultHeaderState from "../containers/HeaderEditor/state.json"

// return
export const loadContent = () => {
	let local = localStorage.getItem("composer-content-state")
	try { return local ? JSON.parse(local) : defaultContentState }
	catch (e) { return defaultContentState }
}

export const loadHeader = () => {
	let local = localStorage.getItem("composer-header-state")
	try { return local ? JSON.parse(local) : defaultHeaderState }
	catch (e) { return defaultHeaderState }
}
