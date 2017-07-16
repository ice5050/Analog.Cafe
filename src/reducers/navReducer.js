const navReducer = (
    state = {
  		view: "VISITOR",
      location: { "top": true, "bottom": true }
  	},
    action
  ) =>  {
	switch (action.type) {
		case "SET_VIEW":
			state = {
				...state,
				view: action.payload
			}
			break
    case "SET_LOCATION":
      const top = action.payload.top
      const bottom = action.payload.bottom
      state = {
        ...state,
        location: {
          "top": typeof top === "undefined" ? true : top,
          "bottom": typeof bottom  === "undefined" ? true : bottom,
        }
      }
      break
		default:
      return state
	}
	return state
}
export default navReducer
