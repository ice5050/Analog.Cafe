// tools
import axios from "axios"
import { setCard } from "./modalActions"

// return
export function setPage(page) {
console.log("setPage",page)
  return {
    type: "POST.SET_PAGE",
    payload: page
  }
}
export function initPage(state) {
	return {
		type: "POST.INIT_PAGE",
		payload: state,
	}
}

export function fetchPage(request) {
  return (dispatch, getState) => {

    // run duplicate & validation checks
    let postState = getState().post
    console.log("fetchPage",postState)
    if(postState.requested.url === request.url) return
    dispatch(initPage({
      requested: request,
      title: postState.title,
    }))

    axios({
      method: 			request.method || "get",
      data:         request.data || {},
      url: 					request.url + ".json",
    })
      .then(response => dispatch(setPage(response.data)))
      .catch(error =>
        dispatch(setCard({
          status: "ok",
          info: {
            title: "Error " + error.response.status + " 😧",
            text: "Couldn’t load the post. Sorry!",
          }
        }, { url: "errors/post" }))
      )
  }
}
