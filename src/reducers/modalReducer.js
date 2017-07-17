const modalReducer = (
    state = {
      display: "none",
      data: {
        title: "Loading Card...",
        image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        text: "",
        buttons: {},
      },
      source: {
        url: "/api/auth/email",
        method: "get"
      }
  	},
    action
  ) =>  {
	switch (action.type) {
    case "CREATE":
      state = {
        ...state,
        data: action.payload
      }
      break
		default:
      return state
	}
	return state
}
export default modalReducer




// render() {
//   return(
//     <Wrapper style={{ display: this.state.display }}>
//       <Card
//         title={ this.state.title  }
//         image={ this.state.image }
//         text={ this.state.text }
//         buttons={ this.state.buttons }
//         show={ this.props.show }
//       />
//     </Wrapper>
//   )
// }
// }
//
//
//
// // connet with redux
// const mapStateToProps = state => {
// return {
//   // view: state.nav.view,
//   // location: state.nav.location,
//   // saveStatus: state.composer.saveStatus,
// }
// }
// export default connect(mapStateToProps)(Modal)
//
//
//
// // title="Sign in with Email"
// // image={ banner }
// // fetch={ "/api/auth/email" }
// // // method="post"
// // data={{ email: this.state.email }}
