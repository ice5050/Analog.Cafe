const userReducer = (state = {
		name: "Max",
		age: 27,
	}, action) =>  {
	switch (action.type) {
		case "CHANGE_NAME_FULFILLED":
			state = {
				...state,
				name: action.payload
			};
			break;
		case "CHANGE_AGE":
			state = {
				...state,
				age: action.payload
			}
			break;
	}
	return state;
};

export default userReducer;