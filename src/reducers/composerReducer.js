export default (
  state = {
    draftStatus: "Draft"
  },
  action
) => {
  switch (action.type) {
    case "COMPOSER.SET_DRAFT_STATUS":
      state = {
        ...state,
        draftStatus: action.payload
      }
      break
    default:
      return state
  }
  return state
}
