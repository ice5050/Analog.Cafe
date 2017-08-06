// tools
import React from "react"
import { NavLink } from "react-router-dom"

// constants
import { DOMAIN_NAME } from "../../../constants/link"


// return
export default props => {

	// all links within analog.cafe domain should become relative
	let to = props.to || "#" // <-- with fallback
	to = to.replace("http://" + DOMAIN_NAME,"")
		.replace("https://" + DOMAIN_NAME,"")
		.replace("http://www." + DOMAIN_NAME,"")
		.replace("https://www." + DOMAIN_NAME,"")

	// external links
	if(to.includes("http"))
		return <a href={ to } target="_blank" rel="nofollow noopener noreferrer" { ...props }>{ props.children }</a>

	// anchor tags
	else if(to.includes("#"))
		return <a href={ to } { ...props }>{ props.children }</a>

	// internal links
	else
		return <NavLink to={ to } { ...props }>{ props.children }</NavLink>
}
