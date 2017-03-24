// tools
import React from "react"
import { activeTouch } from "active-touch"


// components
import { NavLogo } from "./components/NavLogo"

// styles
import { NavContainer, NavLink, NavIndexLink, NavItem } from "./styles"

// render
export class Nav extends React.Component {
	componentDidMount() {
	 		activeTouch.init({ cssclass: "downstate" })
  }
	render(){
		return(
			<NavContainer onMouseUp={ activeTouch.reset() }>
				<ul>
					<NavItem><NavLink 										to={ "/articles" 			}><span>Articles</span></NavLink></NavItem>
					<NavItem><NavLink 										to={ "/photo-essays"	}><span>Photo Essays</span></NavLink></NavItem>
					
					<NavItem prime center	><NavIndexLink	to={ "/"							}><NavLogo /></NavIndexLink></NavItem>
					
					<NavItem prime right	><NavLink 			to={ "/favorites" 		}><span>Favorites</span></NavLink></NavItem>
					<NavItem prime left		><NavLink 			to={ "/submit" 				}><span>Submit</span></NavLink></NavItem>
				</ul>
			</NavContainer>
		)
	}
}