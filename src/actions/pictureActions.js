// tools
import axios from "axios"
import { ROUTE_IMAGE_API } from "../app/containers/Picture/constants"
import { imageSrcToPictureId } from "../app/containers/Picture/helpers"

// return
export function devisePicture(src) {

	let id = imageSrcToPictureId(src)
	let request
	request = ROUTE_IMAGE_API + "/" + id

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
				type: "DEVISE_PICTURE",
				payload: {
					info: response.info,
					status: response.status,
					id: id
				}
			})
			.catch(error => console.log(error))
		)
	}
}
