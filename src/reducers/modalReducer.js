export default (
    state = {
      isVisible: false,
      data: {
        title: "Loading Card...",
        image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        text: "",
        buttons: {},
      },
      request: {
        url: "",
        method: "get",
        data: {},
      }
  	},
    action
  ) =>  {
	switch (action.type) {
    case "SET_DATA":
      state = {
        ...state,
        data: action.payload
      }
      break
    case "FETCH_REQUEST":
      state = {
        ...state,
        source: action.payload
      }
      break
    case "SET_VISIBILITY":
      state = {
        ...state,
        isVisible: action.payload
      }
      break
		default:
      return state
	}
	return state
}
