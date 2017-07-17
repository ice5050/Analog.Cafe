const navReducer = (
    state = {
      status: "loading",
      title : "Loading Card..."
  	},
    action
  ) =>  {
	switch (action.type) {

    case "CREATE_WITH_CONTENT":
      state = {
        ...state,
        status:  action.payload.status || "loading",
        
      }
      break
		default:
      return state
	}
	return state
}
export default navReducer



title="Sign in with Email"
image={ banner }
fetch={ "/api/auth/email" }
// method="post"
data={{ email: this.state.email }}
