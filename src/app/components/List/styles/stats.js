// styles
import styled from "styled-components"

// css
export const ListStats = styled.span`
	${ props => props.theme.typography.title.auto }
	margin: 			0;
	display: 			block;
	color: 				${ props => props.theme.color.brand };
`