const INITIAL_STATE = {
  status: "pending",
  info: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER.GET_USER":
      state = {
        ...state,
        ...action.payload
      }
      break
    default:
      return state
  }
  return state
}
