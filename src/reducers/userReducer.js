const INITIAL_STATE = {
  status: "forbidden",
  info: {},
  session: {
    token : ""
  },
  requested : {
    method: "get",
    data: {},
    url: "",
  }
}

// export default (state = INITIAL_STATE, action) =>  {
// 	switch (action.type) {
//     case "USER.USER":
//       state = {
//         ...state,
//         ...action.payload
//       }
//       break
//     case "USER.USER":
//       state = {
//         ...INITIAL_STATE,
//         ...action.payload,
//       }
//       break
//     case "USER.HIDE_CARD":
//       state = {
//         ...state,
//         hidden: true,
//         requested: state.requested
//       }
//       break
// 		default:
//       return state
// 	}
// 	return state
// }
