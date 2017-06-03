// tools
import React from "react"

// components
import { NavLogo } from "./components/NavLogo"

// styles
import { NavContainer, NavLink, NavIndexLink, NavItem } from "./styles"

// render
export class Nav extends React.Component {
	render(){
		return(
			<NavContainer>
				<ul>
					<NavItem><NavLink 										to={ "/photography" 			}><span>Photography</span></NavLink></NavItem>
					<NavItem prime right	><NavLink				to={ "/essays"						}><span>Essays</span></NavLink></NavItem>

					<NavItem prime center	><NavIndexLink	to={ "/"									}><NavLogo /></NavIndexLink></NavItem>

					<NavItem							><NavLink 			to={ "/about"			 				}><span>About</span></NavLink></NavItem>
					<NavItem prime left		><NavLink 			to={ "/submit" 						}><span>Submit</span></NavLink></NavItem>
				</ul>
			</NavContainer>
		)
	}
}
