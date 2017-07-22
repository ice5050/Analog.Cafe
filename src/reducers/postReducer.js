export default (
    state = {
    	"status": "loading",
    	"title": "Loading Article...",
    	"subtitle": "",
    	"author": { "name" : "Fetching Author Name..." },
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
      }
      break
		default:
      return state
	}
	return state
}
