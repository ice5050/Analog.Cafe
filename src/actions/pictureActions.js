// tools
import axios from "axios"
import { ROUTE_IMAGE_API } from "../constants/picture"
import errorMessages from "../constants/messages/errors"
import { getFroth } from "../utils/image-froth"
import { axiosRequest } from "../utils/axios-request"

// return
const unknownAuthor = (id, error) => {
  return {
    type: "PICTURE.GET_INFO",
    payload: {
      info: {
        author: {
          name: errorMessages.VIEW_TEMPLATE.PICTURE.name,
          id: "unknown",
          error:
            !error.response || !error.response.status
              ? errorMessages.DISAMBIGUATION.CODE_204.error
              : error
        }
      },
      status: "fail",
      id
    }
  }
}
export const getInfo = src => {
  let id = getFroth(src)
  let request
  request = {
    url: ROUTE_IMAGE_API + "/" + id
  }

  return (dispatch, getState) => {
    // run duplicate & validation checks
    let picturesState = getState().pictures
    if (picturesState[id]) return

    axios(axiosRequest(request))
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
