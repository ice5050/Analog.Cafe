// tools
import { Raw } from "slate"
import throttle from "lodash/throttle"


// return
export const saveContent = throttle((document, state) => {
	const contentState = JSON.stringify(Raw.serialize(state))
	localStorage.setItem("composer-content-state", contentState)
	localStorage.setItem("composer-content-text", document.text)
}, 3000)

export const saveHeader = throttle(header => {
	const headerState = JSON.stringify(header)
	localStorage.setItem("composer-header-state", headerState)
}, 3000)
