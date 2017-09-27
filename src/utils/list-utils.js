import { ROUTE_FILTERS, ROUTE_META, ROUTE_LIST_API } from "../constants/list"

export const getListMeta = (pathname = "/", page = 1, url = ROUTE_LIST_API) => {
  let request
  let meta
  page = parseInt(page, 0)

  // filter by author name
  if (pathname.includes("/author/")) {
    meta = ROUTE_META["/author/*"]
    request = {
      params: {
        author: pathname.match(/\/author\/(.*)/)[1],
        page
      },
      url
    }
  } else {
    // filter by tags
    meta = ROUTE_META[pathname] ? ROUTE_META[pathname] : ROUTE_META.default
    request = {
      params: {
        tag: ROUTE_FILTERS[pathname] ? ROUTE_FILTERS[pathname] : "",
        page
      },
      url
    }
  }

  return { request, meta }
}

export const trimAuthorName = name => {
  let firstName = name.split(" ")[0]
  return firstName.length > 10 ? firstName.substr(0, 9) + "…" : firstName
}
