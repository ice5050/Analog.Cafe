const composerReducer = (state = {
		saveStatus: "Draft",
	}, action) =>  {
	switch (action.type) {
		case "SAVE_STATUS":
			state = {
				...state,
				saveStatus: action.payload
			}
			break
		default:
			state = { ...state }
	}
	console.log(state)
	return state
};

export default composerReducer
