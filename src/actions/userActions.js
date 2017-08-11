// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"

const ROUTE_USER_API = "/api/auth/user"

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// return
export function getSession(request={ url: ROUTE_USER_API }) {
	var token = getParameterByName('token')
	if(token){
		localStorage.setItem('token', token);
	}
	return dispatch => { }
}
