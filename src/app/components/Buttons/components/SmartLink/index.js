// tools
import React from "react"
import { Link } from "react-router"

// styles
export const SmartLink = props => {
	return props.to.includes("http") ? <a href={props.to} target="_blank" rel="nofollow noopener noreferrer" {...props} />
	: <Link {...props}>{props.children}</Link>
}