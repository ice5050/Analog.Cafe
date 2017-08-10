<<<<<<< HEAD
import { API_DOMAIN } from "./link"
=======
import { APP_DESCRIPTION } from "./app"
>>>>>>> Updated lael copy, updated titles, added app.js to constants folder
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





											"text"	: "Stories, expressed with images shot on film",






											"emoji"				: "🌇🌃🌌",
											// photo-essay
	},
	"/articles"			:	{
											"text" : "Reads of interest",
											// creative-expression > story
											// off-topic > editorial
											// theory-and-practice > review
											// opinion > how-to
											"emoji"				: "🌈",
	},
	"/"							:	{
											"text" : APP_DESCRIPTION,
											"emoji"				: "☕️",
											"designation" : "homepage",
	},
	"/author/*"			:	{
											"text" : "Images and stories by ",
											"emoji"				: "🤘",
	},
	"default"				: {
											"text" : APP_DESCRIPTION,
											"emoji"				: "🍩",
	},
}
