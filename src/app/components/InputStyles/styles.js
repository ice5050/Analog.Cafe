// styles
import { css } from "styled-components"
import Color from "color"

// components

// css
const warning = css`
	background: ${props =>
    props.warning
      ? Color(props.theme.color.brand)
          .alpha(props.theme.opacity.least * 2)
          .string()
      : `transparent`};
`
export const reset = css`
	width: 			100%;
	border:			none;
	outline:		rgba(0,0,0,0);
	resize: 		none;
`
export const title = css`
	${reset}
	${props => props.theme.typography.title.auto}
	font-size: 	${props => props.theme.size.font.make.larger}em;
	text-align: center;
	${warning}
`
export const subtitle = css`
	${reset}
	${props => props.theme.typography.title.auto}
	font-size: 	${props => props.theme.size.font.make.larger / 2}em;
	text-align: center;
	${warning}
`
