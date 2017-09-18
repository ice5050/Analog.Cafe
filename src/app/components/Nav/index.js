// tools
import React from "react"

// components
import Logo from "../Logo"
import { ModalDispatch } from "../../containers/Modal"

import { ROUTE_AUTH_USER_LANDING } from "../../../constants/user"
import {
  MESSAGE_HINT_SUBMIT_CONSENT,
  MESSAGE_HINT_AUTO_SAVE
} from "../../../constants/messages/hints"

// styles
import { NavLink, NavIndexLink, NavItem } from "./styles"

// return
export const CommonNav = props => {
  return (
    <ul>
      <NavItem>
        <NavLink to={"/photo-essays"}>
          <span>Photo Essays</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={"/articles"}>
          <span>Articles</span>
        </NavLink>
      </NavItem>
      <NavItem prime center>
        <NavIndexLink to={"/"}>
          <Logo />
        </NavIndexLink>
      </NavItem>
      <NavItem prime left>
        {props.userStatus === "ok" ? (
          <NavLink to={ROUTE_AUTH_USER_LANDING}>
            <span>My Stuff</span>
          </NavLink>
        ) : (
          <NavLink to={"/about"}>
            <span>About</span>
          </NavLink>
        )}
      </NavItem>
      <NavItem prime right>
        <NavLink to={props.userStatus === "ok" ? "/submit/compose" : "/submit"}>
          <span>Submit</span>
        </NavLink>
      </NavItem>
    </ul>
  )
}

const NavLinkSendLabel = () => {
  return <span>Send</span>
}
const NavLinkSend = props => {
  return (
    <ModalDispatch
      with={MESSAGE_HINT_SUBMIT_CONSENT}
      style={{ textDecoration: "none" }}
    >
      <NavLinkSendLabel />
    </ModalDispatch>
  )
}

export const ComposerNav = props => {
  return (
    <ul>
      <NavItem indicator prime left>
        <ModalDispatch
          with={MESSAGE_HINT_AUTO_SAVE}
          style={{ textDecoration: "none" }}
        >
          <span>{props.draftStatus}</span>
        </ModalDispatch>
      </NavItem>
      <NavItem prime center>
        <NavIndexLink to={"/"}>
          <Logo />
        </NavIndexLink>
      </NavItem>
      <NavItem prime right>
        <NavLinkSend userStatus={props.userStatus} />
      </NavItem>
    </ul>
  )
}

export { NavWrapper } from "./styles"
