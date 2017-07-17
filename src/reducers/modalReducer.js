const modalReducer = (
    state = {
      data: {
        title : "Loading Card..."
      }
  	},
    action
  ) =>  {
	switch (action.type) {
    case "CREATE":
      state = {
        ...state,
        data: action.payload
      }
      break
		default:
      return state
	}
	return state
}
export default modalReducer
