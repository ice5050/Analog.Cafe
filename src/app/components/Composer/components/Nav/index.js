// tools
import React from "react"

// components
import { NavLogo } from "../../../Nav/components/NavLogo"

// styles
import { NavContainer, NavLink, NavIndexLink, NavItem } from "../../../Nav/styles"

// render
export class ComposerNav extends React.Component {
	render(){
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
}
