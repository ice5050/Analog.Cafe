export default (
    state = {
      "status": "loading",
      "filters": {
        "tags": [],
        "author": {}
      },
      "page" : {
        "current" : "1",
        "total" : "1"
      },
      "items" : [
        {
          "type" : "placeholder",
          "tag" : "████████",
          "title" : "███",
          "id" : "0000000",
          "author" : {
            "name" : "██████"
          },
          "summary" : "█ ████████ ██████ ████ ████ ██████████ ████ ████████████████ ██"
        },
        {
          "type" : "placeholder",
          "tag" : "████",
          "title" : "████",
          "id" : "0000001",
          "author" : {
            "name" : "█████"
          },
          "summary" : "█████ ████████████ ████████ ███ ███████████ ██████████████████"
        },
        {
          "type" : "placeholder",
          "tag" : "█████████",
          "title" : "██",
          "id" : "0000002",
          "author" : {
            "name" : "██"
          },
          "summary" : "█ ██████████ ██████ ██████ ███████████ ███ ███████████ █████████"
        }
      ]
  	},
    action
  ) =>  {
	switch (action.type) {
		case "SET_STATUS":
			state = {
				...state,
				status: action.payload
			}
			break
    case "SET_FILTERS":
			state = {
				...state,
				filters: action.payload
			}
			break
    case "SET_PAGINATION":
			state = {
				...state,
				page: action.payload
			}
			break
    case "ADD_PAGE":
      //console.log([...state.items, ...action.payload])
			state = {
				...state,
				items: action.payload
			}
      console.log(state)
			break
    case "RESET_LIST":
		default:
      return state
	}
	return state
}
