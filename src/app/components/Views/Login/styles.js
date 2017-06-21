// tools
import React from "react"
import styled, { css } from "styled-components"
import Color from "color"


// images
// import facebookLogo from "./images/logo-facebook.svg"
import twitterLogo from "./images/logo-twitter.svg"


// components
import Button from "../../Button"

// css
const brandButtonStyles = css`
	color: 		${ props => props.theme.color.background } !important;
	img {
		height: 2em;
	}
`
const StyledTwitterButton = styled(Button)`
	background-color:	#1da1f2;
	${ brandButtonStyles }
	img {
		margin: -1.25em 0 -1em -1em;
	}
`

// const StyledFacebookButton = styled(Button)`
// 	background-color:	#3c5a99;
// 	${ brandButtonStyles }
// 	img {
// 		margin: -1.5em .25em -1em -1em;
// 	}
// `

export const TwitterButton = props => <StyledTwitterButton><img src={ twitterLogo } alt="Twitter logo"/> { props.children }</StyledTwitterButton>
// export const FacebookButton = props => <StyledFacebookButton><img src={ facebookLogo } alt="Facebook logo"/> { props.children }</StyledFacebookButton>

const shadowGrey = props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string()
const shadowGrey2 = props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least * 2).string()
export const InputButtonPair = styled.div`
	max-width: 			${ props => props.theme.size.breakpoint.stops.min }px;
	margin: 				0 auto;
	border-radius: 	${ props => props.theme.effects.borderRadius.small }em;
	background: 		${ shadowGrey };
	overflow: 			hidden;
	box-shadow: 		0 1px 1px ${ shadowGrey2 }, 0 0 0 1px ${ shadowGrey };
	input {
		text-align: center;
		padding: 0;
		line-height: ${ props => props.theme.size.block.spacing * 2 }em;
	}
	a {
		margin: 0;
	border-radius: 0;
	}
`
export const SubWindow = styled.div`
	padding: ${ props => props.theme.size.block.column.safety }em 0 ${ props => props.theme.size.block.spacing * 4 }em;
`
