// tools
import axios from "axios"
import { setCard } from "./modalActions"
import errorMessage from "../constants/error-messages"
import { axiosRequest } from "./helpers"

import { ROUTE_ARTICLE_API } from "../constants/article"

// return
export function setPage(page) {
  return {
    type: "ARTICLE.SET_PAGE",
    payload: page
  }
}
export function initPage(state) {
  return {
    type: "ARTICLE.INIT_PAGE",
    payload: state
  }
}

export function fetchPage(request) {
  return (dispatch, getState) => {
    // do not load anything outside of API scope
    if (!request.url.includes(ROUTE_ARTICLE_API)) return

    // get current state from store
    let articleState = getState().article

    // do not load article twice in a arow
    if (articleState.requested.url === request.url) return

    // pre-cook article title, when available
    // (if it matches actual requested article)
    if (request.url.includes(articleState.slug))
      dispatch(
        initPage({
          requested: request,
          title: articleState.title,
          subtitle: articleState.subtitle,
          author: articleState.author,
          poster: articleState.poster
        })
      )
    else dispatch(initPage())

    axios(axiosRequest(request))
      .then(response => {
        response.data.content && response.data.content.raw
          ? dispatch(setPage(response.data))
          : dispatch(
              setCard(
                {
                  status: "ok",
                  info: {
                    title: "Error 204",
                    text: errorMessage.EMPTY_ARTICLE
                  }
                },
                { url: "errors/article" }
              )
            )
      })
      .catch(error =>
        dispatch(
          setCard(
            {
              status: "ok",
              info: {
                title:
                  "Error: " +
                  (error.response ? error.response.status : "no response"),
                text: errorMessage.FAILED_ARTICLE
              }
            },
            { url: "errors/article" }
          )
        )
      )
  }
}
