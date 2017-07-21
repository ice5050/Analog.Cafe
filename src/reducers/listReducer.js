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
		case "SET_LIST_PAGE":
      console.log("set state")
			state = {
				...state,
				...action.payload
			}
			break
    // case "ADD_PAGE":
    //   //console.log([...state.items, ...action.payload])
		// 	state = {
		// 		...state,
		// 		items: action.payload
		// 	}
		// 	break
    case "RESET_LIST_PAGE":
		default:
      return state
	}
	return state
}
