// tools
import React from "react"

// components
import Logo from "../Logo"

// styles
import { NavLink, NavIndexLink, NavItem } from "./styles"

// return
export const CommonNav = props => {
	return(
		<ul>
			<NavItem><NavLink exact to={ "/photo-essays" }><span>Photo Essays</span></NavLink></NavItem>
			<NavItem><NavLink	exact to={ "/articles" }><span>Articles</span></NavLink></NavItem>

			<NavItem prime center><NavIndexLink	exact to={ "/" }><Logo /></NavIndexLink></NavItem>

			<NavItem prime left><NavLink exact to={ "/about" }><span>About</span></NavLink></NavItem>
			<NavItem prime right>
				{
					props.userStatus === "ok"
					? <NavLink exact to={ "/my-stuff" }><span>My Stuff</span></NavLink>
					: <NavLink exact to={ "/submit" }><span>Submit</span></NavLink>
				}
			</NavItem>
		</ul>
	)
}

export const ComposerNav = props => {
	return(
		<ul>
			<NavItem indicator prime left><span>{ props.draftStatus }</span></NavItem>
			<NavItem prime center><NavIndexLink	exact to={ "/" }><Logo /></NavIndexLink></NavItem>
			<NavItem prime right><NavLink exact to={ "/sign-in"	}><span>Send <span role="img" aria-label="Rocket">🚀</span></span></NavLink></NavItem>
		</ul>
	)
}

export { Wrapper } from "./styles"
