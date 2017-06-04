const userReducer = (state = {
		title: 		"",
		subtitle: "",
	}, action) =>  {
	switch (action.type) {
		case "CHANGE_TITLE":
			state = {
				...state,
				name: action.payload
			}
			break
		case "CHANGE_SUBTITLE":
			state = {
				...state,
				age: action.payload
			}
			break
		default: break
	}
	return state
}
export default userReducer