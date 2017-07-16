const composerReducer = (state = {
		status: "Draft",
	}, action) =>  {
	switch (action.type) {
		case "UPDATE_STATUS":
			state = {
				...state,
				status: action.payload
			}
			break
		default:
			state = { ...state }
	}
	console.log(state)
	return state
};

export default composerReducer
