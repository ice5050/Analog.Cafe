// tools
import React from "react"

// styles
import styled, { css } from "styled-components"
import Color from "color"

// components
import Link from "../Link"


// css
const ButtonStyles = css`
  max-width: 	${ props => props.theme.size.breakpoint.stops.min }px;

  ${ props => props.theme.size.font.auto }
  ${ props => props.theme.typography.title.auto }

  margin: 					0 auto;
  text-decoration: 	none;
  text-align: 			center;
  display: 					block;
  background: 			${ props => props.red ? props => props.theme.color.brand : props => props.theme.color.background };
  color: 						${ props => props.red ? props => props.theme.color.background : props => props.theme.color.foreground } !important;
  border-radius: 		${ props => props.theme.effects.borderRadius.small }em;
  padding: 					${ props => props.theme.size.block.spacing /1.25 }em 0;
  margin-top: 			${ props => props.theme.size.block.spacing }em;
  margin-bottom: 		${ props => props.theme.size.block.spacing }em;
  cursor:           pointer;


  box-shadow: 			0 1px 1px ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least * 2).string() }
                    , 0 0 0 1px ${ props => Color(props.theme.color.foreground).alpha(props.theme.opacity.least).string() };


  &:active {
    background: 		${ props => props.theme.color.foreground } !important;
    box-shadow: 		0 0 ${ props => props.theme.color.foreground } inset;
    color: 					${ props => props.theme.color.background } !important;
  }

  ${ props => props.theme.size.breakpoint.max.xs`
    width: 100vw;
    max-width: 100vw;
    border-radius: 0;
    section & {
      margin-left: -${ props => props.theme.size.block.column.safety }em;
    }
  `
  }
`


// below line filter out prop "red" that isn't recognized by Link component
export const LinkButton = styled( ({ red, ...props }) => <Link { ...props } />)` ${ ButtonStyles }`
// export non-a/link version of the button
export const Button = styled( ({ red, ...props }) => <button { ...props } />)`
  box-sizing: content-box;
  background: inherit;
  border-width: 0;
  color: inherit;
  user-select: none;
  margin: inherit;
  width: 100%;
  outline: transparent;

  &:-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${ ButtonStyles }
`
export const ButtonGroup = styled.div`
  text-align: center;
	padding: ${ props => props.theme.size.block.column.safety }em 0 ${ props => props.theme.size.block.spacing * 4 }em;
`
