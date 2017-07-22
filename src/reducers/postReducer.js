const INITIAL_STATE = {
  "status": "loading",
  "title": "Loading Article...",
  "subtitle": "",
  "author": { "name" : "Fetching Author Name...", "id" : "" },
  "content" : {
    "raw" : {
      "nodes":[{
        "kind": "block",
        "type": "paragraph",
        "nodes":[{
          "kind":"text",
          "ranges":[{
            "kind":"range",
            "text":"█████████ █████ █████████ ██████████████ ███████████ ████████ █████ ██ █████████ █████ █████████ ██████████████ █████████████ ██████ ███ ██ ██████ █████ █████ █████████ ██████████████ ███████████ ████████ █████ ███████████ █████ █████████ █████████ █████ ███████████ ████████ █████ ███████████ █████ █████████ ██████████████ ███████████ ████████ █████ ███████████ █████ █████████ ██████████ █████████ █████ █████████ █ ████████ ████████████ █████████ ███████████ █████████████ █ ████████ █████ ██"
          }]
        }]
      }]
    }
  },
  requested : {
    method: "get",
    data: {},
    url: "",
  }
}
export default (state = INITIAL_STATE, action) =>  {
	switch (action.type) {
		case "SET_PAGE":
			state = {
				...state,
				...action.payload
			}
			break
    case "INIT_PAGE":
    console.log("post content", state.content)
      state = {
        ...INITIAL_STATE,
        requested: action.payload,
      }
      break
		default:
      return state
	}
	return state
}
