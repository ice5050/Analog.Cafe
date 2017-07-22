const INITIAL_STATE = {
  hidden: true,
  status: "loading",
  info: {
    title: "Loading Card...",
    text: "",
    buttons: {},
  },
  requested : {
    method: "get",
    data: {},
    url: "",
  }
}

export default (state = INITIAL_STATE, action) =>  {
	switch (action.type) {
    case "SET_MODAL":
      state = {
        ...state,
        ...action.payload
      }
      break
    case "INIT_MODAL":
      state = {
        ...INITIAL_STATE,
        hidden: false,
        requested: action.payload,
      }
      break
    case "HIDE_MODAL":
      state = {
        ...state,
        hidden: true,
        requested: state.requested
      }
      break
		default:
      return state
	}
	return state
}
