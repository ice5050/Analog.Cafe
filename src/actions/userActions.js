// tools
// import axios from 'axios'
// import { setCard } from './modalActions'
// import errorMessage from '../constants/error-messages'

const ROUTE_USER_API = '/api/auth/user'


// refactor this:
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

// implement popup & user data functionality from below
export function getSession(request = { url: ROUTE_USER_API }) {
  var token = getParameterByName('token')
  if (token) {
    localStorage.setItem('token', token)
  }
	return dispatch => {}
}

// below: dispatch popup warning that user needs to log in or
// dispatch user's logged in credentials to store



// -export function getSession(request={ url: ROUTE_USER_API }) {
//  -	return dispatch => {
//  -		axios({
//  -			  method: 			request.method || "get",
//  -	      data:         request.data || {},
//  -				params:       request.params || {},
//  -			  url: 					request.url + ".json",
//  -			})
//  -			.then(response => dispatch({
//  -				type: "USER.GET_SESSION",
//  -				payload: response.data,
//  -			}))
//  -			.catch(error => dispatch(setCard({
//  -				status: "ok",
//  -				info: {
//  -					title: "Error: " + (error.response ? error.response.status : "no response"),
//  -					text: errorMessage.FAILED_LOGIN,
//  -				}
//  -			}, { url: "errors/user" }))
//  -		)
//  -	}
