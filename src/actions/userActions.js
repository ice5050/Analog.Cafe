// tools
import axios from "axios"
import { setCard } from "./modalActions"

const ROUTE_USER_API = "/api/auth/user"

// return
export function getSession(request={ url: ROUTE_USER_API }) {
	console.log("check")
	return dispatch => {
		axios({
			  method: 			request.method || "get",
	      data:         request.data || {},
			  url: 					request.url + ".json",
			})
			.then(response => dispatch({
				type: "USER.GET_SESSION",
				payload: response.data,
			}))
			.catch(error => dispatch(setCard({
				status: "ok",
				info: {
					title: "Error " + error.response.status + " 😧",
					text: "Couldn’t verify your account. Sorry!",
				}
			}, { url: "errors/user" }))
		)
	}
}
