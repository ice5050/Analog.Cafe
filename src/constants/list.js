import { API_DOMAIN } from "./link"
export { ROUTE_ARTICLE_DIR } from "./post"
export const PAGE_ITERATOR_STRING = "&page="
export const ROUTE_LIST_API = API_DOMAIN + "/api/list?"
export const ROUTE_AUTHENTICATED_LIST_API = "/api/auth/list"
export const ROUTE_FILTERS = {
	"/photo-essays"	: "photo-essay",
	"/articles"			:	"theory-and-practice:opinion:off-topic",
	"/my-stuff"			:	"",
	"/"							:	"",
}
export const ROUTE_META = {
	"/photo-essays"	: {
											"text"	: "Stories told with images shot on film cameras",
											"emoji"				: "🌇",
	},
	"/articles"			:	{
											"text" : "Practical film photography & other inspiring reads",
											"emoji"				: "🌈",
	},
	"/"							:	{
											"text" : "Film photography publication",
											"emoji"				: "☕️",
											"designation" : "homepage",
	},
	"/author/*"			:	{
											"text" : "Images and stories by ",
											"emoji"				: "🤘",
	},
	"default"				: {
											"text" : "Film photography publication",
											"emoji"				: "🍩",
	},

}
