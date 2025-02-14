// tools
import styled, { css } from "styled-components"
import { Button } from "../Button"
import { Caption } from "../CaptionStyles"

// css
const squreWidth = css`
  width: calc(100% / 3 - ${props => props.theme.size.block.border / 1.5}px);
`
export const GridContainer = styled.div`
  padding: 0;
  ${props => props.theme.size.breakpoint.max.m`
		padding: 0 ${props => props.theme.size.block.border}px;
	`};
`
export const GridRow = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: stretch;
`
export const GridButton = styled(Button)`
  ${squreWidth} position: relative;
  padding: 0;
  overflow: visible;
  margin: 0 ${props => props.theme.size.block.border}px
    ${props => props.theme.size.block.border}px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${props => props.theme.effects.borderRadius.small}em;
  }
  &:last-child {
    margin-right: 0;
  }
  ${props => props.theme.size.breakpoint.max.m`
  & span {
    display: none;
  }`} ${props => props.theme.size.breakpoint.max.xs`
    margin-left: 0 !important;
    border-radius: 		${props => props.theme.effects.borderRadius.small}em;
  `};
`
export const AspectRatio = styled.div`
  padding-top: 100%;
  & > * {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`
export const GridCaption = styled(Caption)`
  text-align: center;
  padding: ${props => props.theme.size.block.spacing / 2}em
    ${props => props.theme.size.block.spacing}em
    ${props => props.theme.size.block.spacing * 2}em;
  border-bottom: ${props => props.theme.elements.thickBorder};
`
