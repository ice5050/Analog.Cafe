export { ROUTE_ARTICLE_DIR } from "./post"
export const PAGE_ITERATOR_STRING = "-page-"
export const ROUTE_LIST_API = "/api/list"
export const ROUTE_AUTHENTICATED_LIST_API = "/api/auth/list"
export const ROUTE_FILTERS = {
	"/photo-essays"	: "photo-essay",
	"/articles"			:	"theory-and-practice_opinion_off-topic",
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
											"text" : "Works by or featuring ",
											"emoji"				: "🤘",
	},
	"default"				: {
											"text" : "Film photography publication",
											"emoji"				: "🍩",
	},

}
