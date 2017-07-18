export default (
    state = {
      style: {
        display: "block",
      },
      data: {
        title: "Loading Card...",
        image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        text: "",
        buttons: {},
      },
      source: {
        url: "",
        method: "get"
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
    case "FETCH_SOURCE":
      state = {
        ...state,
        source: action.payload
      }
      break
    case "SET_VISIBILITY":
      state = {
        ...state,
        style: action.payload
      }
      break
		default:
      return state
	}
	return state
}
