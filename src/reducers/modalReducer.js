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
        url: "/api/auth/email",
        method: "get"
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
