// tools
import React from "react"
import styled, { css } from "styled-components"
import Color from "color"

// components
import { LinkButton } from "../../Button"
import Twitter from "../../icons/Twitter"


// css
const brandButtonStyles = css`
	color: 		${ props => props.theme.color.background } !important;
	svg {
		height: 2em;
	}
`
const StyledTwitterButton = styled(LinkButton)`
	background-color:	#1da1f2;
	${ brandButtonStyles }
	svg {
		margin: -1.25em 0 -1em -1em;
	}
`
export const TwitterButton = props => {
	return (
		<StyledTwitterButton>
			<Twitter />
			&nbsp;{ props.children }
		</StyledTwitterButton>
	)
}

const shadowGrey = props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string()
const shadowGrey2 = props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least * 2).string()
export const InputButtonPair = styled.form`
	max-width: 			${ props => props.theme.size.breakpoint.stops.min }px;
	margin:					0 auto !important;
	border-radius: 	${ props => props.theme.effects.borderRadius.small }em !important;
	background: 		${ shadowGrey };
	overflow: 			hidden;
	box-shadow: 		0 1px 1px ${ shadowGrey2 }, 0 0 0 1px ${ shadowGrey };
	input {
		text-align: center;
		padding: 0;
		line-height: ${ props => props.theme.size.block.spacing * 2 }em;
	}
	button {
		margin: 0;
		border-radius: 0;
	}
`
export const SubWindow = styled.div`
	padding: ${ props => props.theme.size.block.column.safety }em 0 ${ props => props.theme.size.block.spacing * 4 }em;
`
