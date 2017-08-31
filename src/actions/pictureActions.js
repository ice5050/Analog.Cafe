// tools
import axios from "axios"
import { ROUTE_IMAGE_API } from "../constants/picture"
import { imageSrcToPictureId } from "../app/containers/Picture/helpers"
// import { axiosRequest } from "./helpers"

// return
const unknownAuthor = (id, error = { response: { status: 204 } }) => {
  return {
    type: "PICTURE.GET_INFO",
    payload: {
      info: {
        author: {
          name: "Unknown",
          id: "unknown",
          errorCode: error.response.status
        }
      },
      status: "fail",
      id
    }
  }
}
export function getInfo(src) {
  let id = imageSrcToPictureId(src)
  let request
  request = {
    url: ROUTE_IMAGE_API + "/" + id
  }

  return (dispatch, getState) => {
    // run duplicate & validation checks
    let picturesState = getState().pictures
    if (picturesState[id]) return

    // axiosRequest(request)
    axios({
      method: request.method || "get",
      data: request.data || {},
      params: request.params || {},
      url: request.url
    })
      .then(response => {
        response.data.status === "ok"
          ? dispatch({
              type: "PICTURE.GET_INFO",
              payload: {
                info: response.data.info,
                status: response.data.status,
                id
              }
            })
          : dispatch(unknownAuthor(id))
      })
      .catch(error => dispatch(unknownAuthor(id, error)))
  }
}
