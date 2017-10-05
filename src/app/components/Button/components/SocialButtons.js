// tools
import React from "react"
import styled, { css } from "styled-components"

// components
import { Button, LinkButton } from "../../Button"
import Twitter from "../../_icons/components/Twitter"
import Facebook from "../../_icons/components/Facebook"
import Instagram from "../../_icons/components/Instagram"

// css
const brandButtonStyles = css`
  color: ${props => props.theme.color.background} !important;
  svg {
    height: 2em;
  }
`
const twitterButtonStyles = css`
  background-color: #1da1f2;
  svg {
    margin: -1.25em 0.25em -1em -1.5em;
  }
`
const facebookButtonStyles = css`
  background-color: #3b5998;
  svg {
    margin: -1.25em 0 -1em -1em;
  }
`
const instagramButtonStyles = css`
  background-color: #e1306c;
  svg {
    margin: -1.25em 0 -1em -0.25em;
    height: 1.5em;
  }
`

// styled buttons
const StyledTwitterButton = styled(
  Button
)`${brandButtonStyles}${twitterButtonStyles}`
const StyledFacebookButton = styled(
  Button
)`${brandButtonStyles}${facebookButtonStyles}`

// styled links
const StyledTwitterLink = styled(
  LinkButton
)`${brandButtonStyles}${twitterButtonStyles}`
const StyledFacebookLink = styled(
  LinkButton
)`${brandButtonStyles}${facebookButtonStyles}`
const StyledInstagramLink = styled(
  LinkButton
)`${brandButtonStyles}${instagramButtonStyles}`

export const TwitterButton = props => {
  return (
    <StyledTwitterButton onClick={props.onClick}>
      <Twitter />
      &nbsp;{props.children}
    </StyledTwitterButton>
  )
}
export const FacebookButton = props => {
  return (
    <StyledFacebookButton onClick={props.onClick}>
      <Facebook />
      &nbsp;{props.children}
    </StyledFacebookButton>
  )
}

export const TwitterLink = props => {
  return (
    <StyledTwitterLink to={props.to}>
      <Twitter />
      &nbsp;{props.children}
    </StyledTwitterLink>
  )
}
export const FacebookLink = props => {
  return (
    <StyledFacebookLink to={props.to}>
      <Facebook />
      &nbsp;{props.children}
    </StyledFacebookLink>
  )
}
export const InstagramLink = props => {
  return (
    <StyledInstagramLink to={props.to}>
      <Instagram />
      &nbsp;&nbsp;{props.children}
    </StyledInstagramLink>
  )
}
