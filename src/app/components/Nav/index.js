// tools
import React from "react"

// components
import Logo from "../Logo"
import done from "../icons/images/done.jpg"
import { ModalDispatch } from "../../containers/Modal"

// styles
import { NavLink, NavIndexLink, NavItem } from "./styles"

// return
export const CommonNav = props => {
	return(
		<ul>
			<NavItem><NavLink exact to={ "/photo-essays" }><span>Photo Essays</span></NavLink></NavItem>
			<NavItem><NavLink	exact to={ "/articles" }><span>Articles</span></NavLink></NavItem>
			<NavItem prime center><NavIndexLink	exact to={ "/" }><Logo /></NavIndexLink></NavItem>
			<NavItem prime left>
				{
					props.userStatus === "ok"
					? <NavLink exact to={ "/submit/compose" }><span>Submit</span></NavLink>
					: <NavLink exact to={ "/about" }><span>About</span></NavLink>
				}
			</NavItem>
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

const NavLinkSendLabel = () => {
	return <span>Send <span role="img" aria-label="Rocket">🚀</span></span>
}
const NavLinkSend = props => {
	return (
		<div>{
			props.userStatus === "ok"
			? <ModalDispatch
					with={{
						info: {
							// image: done,
							title: "Please Confirm ✅",
							text: "Please confirm that you would like to send your submission for review.",
							"buttons" : [
					  		{
					  			"to": "/submit/thank-you",
					  			"text": "Confirm",
					  			"red": true
					  		}
					  	]
						},
						id: "hints/save"
					}}
					style={{ textDecoration: "none" }}
				><NavLinkSendLabel/></ModalDispatch>
			: <NavLink exact to={ "/sign-in"	}><NavLinkSendLabel/></NavLink>
		}</div>
	)
}

export const ComposerNav = props => {
	return(
		<ul>
			<NavItem indicator prime left><ModalDispatch
				with={{
					info: {
						image: done,
						title: "Never Loose Your Work 👍",
						text: "Your draft is saved automatically every 3 seconds onto your device."
					},
					id: "hints/save"
				}}
				style={{ textDecoration: "none" }}
			><span>{ props.draftStatus }</span></ModalDispatch></NavItem>
			<NavItem prime center><NavIndexLink	exact to={ "/" }><Logo /></NavIndexLink></NavItem>
			<NavItem prime right><NavLinkSend userStatus={ props.userStatus }/></NavItem>
		</ul>
	)
}

export { Wrapper } from "./styles"
