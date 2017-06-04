const composer = (state = {
		title: 		"",
		subtitle: "",
	}, action) =>  {
	switch (action.type) {
		case "CHANGE_TITLE":
			state = {
				...state,
				title: action.payload
			}
			break
		case "CHANGE_SUBTITLE":
			state = {
				...state,
				subtitle: action.payload
			}
			break
		default: break
	}
	return state
}
export default composer