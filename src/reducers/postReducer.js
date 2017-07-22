export default (
    state = {
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
    },
    action
  ) =>  {
	switch (action.type) {
		case "SET_PAGE":
			state = {
				...state,
				...action.payload
			}
			break
    case "INIT_PAGE":
      state = {
        ...state,
        requested: action.payload,
        status: "loading",
      }
      break
		default:
      return state
	}
	return state
}
