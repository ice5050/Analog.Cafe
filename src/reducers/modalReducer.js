export default (
    state = {
      hidden: true,
      status: "loading",
      info: {
        title: "Loading Card...",
        image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        text: "",
        buttons: {},
      },
      requested : {
        method: "get",
        data: {},
        url: "",
      }
  	},
    action
  ) =>  {
	switch (action.type) {
    case "SET_MODAL":
      state = {
        ...state,
        ...action.payload
      }
      break
    case "INIT_MODAL":
      state = {
        ...state,
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
