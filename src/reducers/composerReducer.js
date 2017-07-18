export default (
		state = {
			saveStatus: "Draft",
		},
		action
	) =>  {
	switch (action.type) {
		case "SAVE_STATUS":
			state = {
				...state,
				saveStatus: action.payload
			}
			break
		default:
			return state
	}
	return state
}
