import { API_DOMAIN } from "./link"
export { ROUTE_ARTICLE_DIR } from "./post"
export const PAGE_ITERATOR_STRING = "-page-"
export const ROUTE_LIST_API = API_DOMAIN + "/api/list"
export const ROUTE_AUTHENTICATED_LIST_API = "/api/auth/list"
export const ROUTE_FILTERS = {
	"/photo-essays"	: "photo-essay",
	"/articles"			:	"theory-and-practice:opinion:off-topic",
	"/my-stuff"			:	"",
	"/"							:	"",
}
export const ROUTE_META = {
	"/photo-essays"	: {
											"text"	: "Photo essays & graphic stories",
											"emoji"				: "🌅",
	},
	"/articles"			:	{
											"text" : "Articles on film photography & beyond",
											"emoji"				: "🖋",
	},
	"/"							:	{
											"text" : "Film photography, art, stories & more",
											"emoji"				: "☕️",
											"designation" : "homepage",
	},
	"/author/*"			:	{
											"text" : "Published works by ",
											"emoji"				: "🤘",
	},
	"default"				: {
											"text" : "Film photography publication",
											"emoji"				: "🍩",
	},

}
