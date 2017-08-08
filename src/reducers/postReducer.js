const INITIAL_STATE = {
  "status": "loading",
  "title": "Loading Post…",
  "subtitle": "",
  "author": { "name" : "Finding post author…", "id" : "" },
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
		case "POST.SET_PAGE":
			state = {
				...state,
				...action.payload
			}
			break
    case "POST.INIT_PAGE":
      state = {
        ...INITIAL_STATE,
        ...action.payload,
      }
      break
		default:
      return state
	}
	return state
}
