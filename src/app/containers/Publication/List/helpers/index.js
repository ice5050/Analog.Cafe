import { ROUTE_FILTERS, ROUTE_DESCRIPTIONS } from "../routes"

export const datestamp = unix => {
	const m = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
	let date = new Date(unix * 1000)
	let year = date.getFullYear()
	let month = m[date.getMonth()]
	let day = date.getDate()
	return month + " " + day + ", " + year
}
export const compleFilterString = url => {
	url = url ? url : "/"
	let filters
	let routeDescription
	
	// filter by author name
	if(url.includes("/author/")){
		let authorId = url.match(/\/author\/(.*)/)[1]
		authorId = authorId ? "/author-" + authorId : "/index"
		
		filters = { author: { id: authorId } }
		routeDescription = {
			description: ROUTE_DESCRIPTIONS["/author/*"].description,
			emoji: ROUTE_DESCRIPTIONS["/author/*"].emoji
		}
	}
	
	// filter by tags
	else {
		let tags
		tags = ROUTE_FILTERS[url]
    tags = tags ? "/tags-" + tags : "/index"
    filters = { tags }
    routeDescription =  ROUTE_DESCRIPTIONS[url]
	}
	return { filters, routeDescription }
}