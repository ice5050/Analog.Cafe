// tools
import React from "react"
import { Link } from "react-router"

// constants
import { DOMAIN_NAME } from "./domain"

// styles
export default props => {

	// all links within analog.cafe domain should become relative
	let to = props.to || "#" // <-- with fallback to domain root
	to = to.replace("http://" + DOMAIN_NAME,"")
		.replace("https://" + DOMAIN_NAME,"")
		.replace("http://www." + DOMAIN_NAME,"")
		.replace("https://www." + DOMAIN_NAME,"")

	// sort the props game out
	const { noRouterContext, ...linkProps } = props

	// external links
	if(to.includes("http"))
		return <a href={ to } target="_blank" rel="nofollow noopener noreferrer" { ...linkProps }>{ props.children }</a>

	// anchor tags
	else if(to.includes("#"))
		return <a href={ to } { ...linkProps }>{ props.children }</a>

	// internal link but outside router context
	else if(noRouterContext)
		return <a
			href={ to }
			// onClick={ event => { event.preventDefault(); this.history.pushState(null, null, to) } }
			{ ...linkProps }
		>{ props.children }</a>

	// internal links
	else
		return <Link to={ to } { ...linkProps }>{ props.children }</Link>
}
