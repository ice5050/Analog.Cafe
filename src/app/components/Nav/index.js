// tools
import React from "react"

// components
import Logo from "../Logo"

// styles
import { Wrapper, NavLink, NavIndexLink, NavItem } from "./styles"

// return
export const VisitorNav = props => {
	return(
		<ul>
			<NavItem><NavLink 										to={ "/photo-essays" 			}><span>Photo Essays</span></NavLink></NavItem>
			<NavItem><NavLink											to={ "/articles"					}><span>Articles</span></NavLink></NavItem>

			<NavItem prime center	><NavIndexLink	to={ "/"									}><Logo /></NavIndexLink></NavItem>

			<NavItem prime left		><NavLink 			to={ "/about"			 				}><span>About</span></NavLink></NavItem>
			<NavItem prime right	><NavLink 			to={ "/submit" 						}><span>Submit</span></NavLink></NavItem>
		</ul>
	)
}

export const ComposerNav = props => {
	return(
		<ul>
			<NavItem indicator prime left><span>{ props.draftStatus }</span></NavItem>

			<NavItem prime center	><NavIndexLink	to={ "/"						}><Logo /></NavIndexLink></NavItem>

			<NavItem prime right><NavLink 				to={ "/sign-in"	}><span>Send <span role="img" aria-label="Rocket">🚀</span></span></NavLink></NavItem>
		</ul>
	)
}

export { Wrapper }
