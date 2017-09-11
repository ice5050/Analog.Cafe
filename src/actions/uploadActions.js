// tools
import axios from "axios"
import { axiosRequest } from "./helpers"

import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"

export const setStatus = state => {
  return {
    type: "UPLOAD.SET_STATUS",
    payload: state
  }
}
export const initStatus = () => {
  return {
    type: "UPLOAD.INIT_STATUS"
  }
}

export const send = request => {
  return dispatch => {
    dispatch(initStatus())
    axios(axiosRequest(request))
      .then(response => {
        dispatch(
          setStatus({
            status: "ok"
          })
        )
      })
      .catch(error => {
        error.response && error.response.status === 401
          ? dispatch(
              setStatus({
                status: "unauthorized"
              })
            )
          : dispatch(
              setCard(
                {
                  status: "ok",
                  info: {
                    title: errorMessage.VIEW_TEMPLATE.SUBMISSION.title,
                    text: errorMessage.VIEW_TEMPLATE.SUBMISSION.text,
                    error: error,
                    buttons: [
                      {
                        to: "#try-again",
                        onClick: () => {
                          window.location.reload()
                        },
                        text: "Try Again",
                        red: true
                      },
                      {
                        to: "/submit/compose",
                        text: "Try Later"
                      }
                    ]
                  }
                },
                {
                  url: "errors/upload"
                }
              )
            )
      })
  }
}

// get user data matched to login credentials
// export const getUser = token => {
//   return dispatch => {
//     axios({
//       method: "get",
//       headers: {
//         Authorization: "JWT " + token
//       },
//       url: ROUTE_USER_API
//     })
//       .then(response =>
//         dispatch({
//           type: "USER.GET_USER",
//           payload: response.data
//         })
//       )
//       .catch(error =>
//         dispatch(
//           setCard(
//             {
//               status: "ok",
//               info: {
//                 title: errorMessage.VIEW_TEMPLATE.CARD.title,
//                 text: errorMessage.DISAMBIGUATION.CODE_401.error
//               }
//             },
//             { url: "errors/user" }
//           )
//         )
//       )
//   }
// }
