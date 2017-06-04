export function changeTitle(text) {
	return {
		type: "CHANGE_TITLE",
		payload: text
	};
}

export function changeSubtitle(text) {
	return {
		type: "CHANGE_SUBTITLE",
		payload: text
	}
}