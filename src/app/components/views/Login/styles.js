// tools
import React from "react"
import styled, { css } from "styled-components"
import Color from "color"


// images
// import facebookLogo from "./images/logo-facebook.svg"


// components
import Button from "../../Button"

// css
const brandButtonStyles = css`
	color: 		${ props => props.theme.color.background } !important;
	svg {
		height: 2em;
	}
`
const StyledTwitterButton = styled(Button)`
	background-color:	#1da1f2;
	${ brandButtonStyles }
	svg {
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

export const TwitterButton = props => {
	return (
		<StyledTwitterButton>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
				<rect width="400" height="400" style={{ opacity: 0, fill: "#292F33" }}/>
				<path
					style={{ fill: "#FFFFFF" }}
					d="M153.6 301.6c94.3 0 145.9-78.2 145.9-145.9 0-2.2 0-4.4-0.1-6.6 10-7.2 18.7-16.3 25.6-26.6 -9.2 4.1-19.1 6.8-29.5 8.1 10.6-6.3 18.7-16.4 22.6-28.4 -9.9 5.9-20.9 10.1-32.6 12.4 -9.4-10-22.7-16.2-37.4-16.2 -28.3 0-51.3 23-51.3 51.3 0 4 0.5 7.9 1.3 11.7 -42.6-2.1-80.4-22.6-105.7-53.6 -4.4 7.6-6.9 16.4-6.9 25.8 0 17.8 9.1 33.5 22.8 42.7 -8.4-0.3-16.3-2.6-23.2-6.4 0 0.2 0 0.4 0 0.7 0 24.8 17.7 45.6 41.1 50.3 -4.3 1.2-8.8 1.8-13.5 1.8 -3.3 0-6.5-0.3-9.6-0.9 6.5 20.4 25.5 35.2 47.9 35.6 -17.6 13.8-39.7 22-63.7 22 -4.1 0-8.2-0.2-12.2-0.7C97.7 293.1 124.7 301.6 153.6 301.6"
				/>
			</svg>
			&nbsp;{ props.children }
		</StyledTwitterButton>
	)
}
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
