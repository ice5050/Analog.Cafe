// tools

// components

// state

// dictionary
export const ROUTE_ARTICLE_DIR = "/zine"
export const ROUTE_LIST_API = "/api/list"
export const ROUTE_FILTERS = {
	"/photo-essays"	: "photo-essay",
	"/articles"			:	"theory-and-practice_opinion_off-topic",
	"/"							:	"",
}
export const ROUTE_DESCRIPTIONS = {
	"/photo-essays"	: {
											"description"	: "Photo essays & graphic stories.",
											"emoji"				: "🌅",
	},
	"/articles"			:	{
											"description" : "Articles on film photography & beyond.",
											"emoji"				: "🖋",
	},
	"/"							:	{
											"description" : "Film photography, art, stories & more.",
											"emoji"				: "☕️",
											"designation" : "homepage",
	},
	"/author/*"			:	{
											"description" : "Submissions by ...",
											"emoji"				: "👤",
	},
							
}