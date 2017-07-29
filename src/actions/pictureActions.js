// tools
import axios from "axios"
import { ROUTE_IMAGE_API } from "../constants/picture"
import { imageSrcToPictureId } from "../app/containers/Picture/helpers"

// return
export function getInfo(src) {

	let id = imageSrcToPictureId(src)
	let request
	request = {
		url: ROUTE_IMAGE_API + "/" + id,
	}

	return (dispatch, getState) => {

		// run duplicate & validation checks
		let picturesState = getState().pictures
		if(picturesState[id]) return

		axios({
			  method: 			request.method || "get",
	      data:         request.data || {},
			  url: 					request.url + ".json",
			})
			.then(response => dispatch({
				type: "PICTURE.GET_INFO",
				payload: {
					info: response.data.info,
					status: response.data.status,
					id
				}
			}))
			.catch(error => dispatch({
				type: "PICTURE.GET_INFO",
				payload: {
					info: {
						author: {
							"name": "Unknown",
							"id": "unknown",
							"errorCode": error.response.status,
						}
					},
					status: "fail",
					id
				}
			}))
	}
}
