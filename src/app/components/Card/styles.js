// tools
import styled, { css } from "styled-components"
import Color from "color"

// components
import { LinkButton } from "../Button"

// styles
import { Sidenote } from "../CaptionStyles"

// css
export const CardButtonStyles = css`
  max-width: 100%;
  margin: 0;
  border-radius: 0;
  &:active {
    box-shadow: 0 -1px 0 ${props => props.theme.color.foreground};
  }
`
export const Card = styled.div`
  position: relative;
  display: block;
  background: ${props => props.theme.color.background};
  overflow: hidden;
  max-width: ${props => props.theme.size.breakpoint.stops.min}px;

  border-radius: ${props => props.theme.effects.borderRadius.med}em;
  box-shadow: 0 ${props => props.theme.size.block.spacing / 2}em
    ${props => props.theme.size.block.spacing * 2}em
    ${props =>
      Color(props.theme.color.foreground)
        .alpha(props.theme.opacity.half)
        .string()};

  ${props => props.theme.size.breakpoint.max.xs`
		border-radius: 0;
	`} figure {
    margin: 0;
    border-bottom: ${props => props.theme.elements.thickBorder};
    img {
      width: 100%;
    }
  }
  & > button,
  & > a {
    ${CardButtonStyles};
  }
`
export const CardFlattened = styled(Card)`
  margin: ${props => props.theme.size.block.column.safety}em auto;
  box-shadow: 0 1px 1px
      ${props =>
        Color(props.theme.color.foreground)
          .alpha(props.theme.opacity.least * 2)
          .string()},
    0 0 0 1px
      ${props =>
        Color(props.theme.color.foreground)
          .alpha(props.theme.opacity.least)
          .string()};
  border-radius: ${props => props.theme.effects.borderRadius.small}em;
`
export const CardButton = styled(LinkButton)`${CardButtonStyles};`

export const CardCaptionStyles = css`
  text-align: left;
  padding: ${props => props.theme.size.block.spacing}em
    ${props => props.theme.size.block.column.safety}em;
  font-size: 1.075em !important;
`
export const CardCaption = styled(Sidenote)`${CardCaptionStyles};`

export const CardHeader = styled.header`
  padding: ${props => props.theme.size.block.spacing / 4}em
    ${props => props.theme.size.block.spacing / 2}em;
  z-index: ${props => props.theme.layer.up};
  display: flex;
  justify-content: space-between;

  position: relative;
  box-shadow: 0 1px 1px
      ${props =>
        Color(props.theme.color.foreground)
          .alpha(props.theme.opacity.least * 2)
          .string()},
    0 0 0 1px
      ${props =>
        Color(props.theme.color.foreground)
          .alpha(props.theme.opacity.least)
          .string()};

  h3,
  input {
    ${props => props.theme.size.font.auto} ${props =>
        props.theme.typography.title.auto} white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    padding: 0;
  }
  h3::before,
  input::before {
    content: "✦";
  }
  a {
    ${props => props.theme.size.font.auto} text-decoration:none;
    &:active {
      background: 0 0;
      color: ${props => props.theme.color.brand};
    }
  }

  .fonts-loaded-headers & h3 {
    ${props => props.theme.typography.title.fontsLoaded};
  }
`
