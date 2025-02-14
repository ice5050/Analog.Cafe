import emojis from "../constants/messages/emojis"

const INITIAL_STATE = {
  status: "loading",
  title: emojis.HUG_RIGHT,
  subtitle: "Loading…",
  content: {
    raw: {
      nodes: [
        {
          kind: "block",
          type: "paragraph",
          nodes: [
            {
              kind: "text",
              ranges: [
                {
                  kind: "range",
                  text:
                    "█████████ █████ █████████ ██████████████ ███████████ ████████ █████ ██ █████████ █████ █████████ ██████████████ █████████████ ██████ ███ ██ ██████ █████ █████ █████████ ██████████████ ███████████ ████████ █████ ███████████ █████ █████████ █████████ █████ ███████████ ████████ █████ ███████████ █████ █████████ ██████████████ ███████████ ████████ █████ ███████████ █████ █████████ ██████████ █████████ █████ █████████ █ ████████ ████████████ █████████ ███████████ █████████████ █ ████████ █████ ██"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  requested: {
    method: "get",
    params: {},
    url: ""
  }
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ARTICLE.SET_PAGE":
      state = {
        ...state,
        ...action.payload
      }
      break
    case "ARTICLE.INIT_PAGE":
      state = {
        ...INITIAL_STATE,
        ...action.payload
      }
      break
    default:
      return state
  }
  return state
}
