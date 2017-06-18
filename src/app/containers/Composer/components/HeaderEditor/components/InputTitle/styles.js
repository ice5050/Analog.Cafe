// styles
import styled from "styled-components"

// components
import { InputTitle } from "./index"

// css
export const Title = styled(InputTitle)`
	${ props => props.theme.typography.title.auto }
	font-size: 	${ props => props.theme.size.font.make.larger }em;
	text-align: center;
`
export const Subtitle = styled(InputTitle)`
	${ props => props.theme.typography.title.auto }
	font-size: 	${ props => props.theme.size.font.make.larger / 2 }em;
	text-align: center;
`
