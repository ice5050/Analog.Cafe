// tools
import React from "react"
import styled, { css } from "styled-components"

// images
import facebookLogo from "./images/logo-facebook.svg"
import twitterLogo from "./images/logo-twitter.svg"


// components
import { PageButton } from "../../components/Button"

// css
const brandButtonStyles = css`
	color: 		${ props => props.theme.color.background } !important;
	img {
		height: 2em;
	}
`
const StyledTwitterButton = styled(PageButton)`
	background-color:	#1da1f2;
	${ brandButtonStyles }
	img {
		margin: -1.25em 0 -1em -1em;
	}
`

const StyledFacebookButton = styled(PageButton)`
	background-color:	#3c5a99;
	${ brandButtonStyles }
	img {
		margin: -1.5em .25em -1em -1em;
	}
`

export const TwitterButton = props => <StyledTwitterButton><img src={ twitterLogo } alt="Twitter logo"/> { props.children }</StyledTwitterButton>
export const FacebookButton = props => <StyledFacebookButton><img src={ facebookLogo } alt="Facebook logo"/> { props.children }</StyledFacebookButton>