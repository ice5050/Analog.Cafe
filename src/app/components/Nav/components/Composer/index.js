// tools
import React from "react"

// components
import { NavLogo } from "../../../Logo/components/Nav"

// styles
import { NavContainer, NavLink, NavIndexLink, NavItem } from "../../../Nav/styles"

// render
export const ComposerNav = props => {
	return(
		<NavContainer>
			<ul>
				<NavItem indicator prime left><span>Saved</span></NavItem>
				<NavItem prime center	><NavIndexLink	to={ "/"						}><NavLogo /></NavIndexLink></NavItem>

				<NavItem prime right><NavLink 				to={ "/submit/send"	}><span>Send <span role="img" aria-label="Rocket">🚀</span></span></NavLink></NavItem>
			</ul>
		</NavContainer>
	)
}
