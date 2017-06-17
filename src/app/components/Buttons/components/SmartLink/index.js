// tools
import React from "react"
import { Link } from "react-router"

// styles
export const SmartLink = props => {
	if(props.to.includes("http"))
		return <a href={props.to} target="_blank" rel="nofollow noopener noreferrer" {...props}>{ props.children }</a>
	
	else if(props.to.includes("#"))
		return <a href={props.to} {...props}>{ props.children }</a>
	
	else
		return <Link {...props}>{props.children}</Link>
}