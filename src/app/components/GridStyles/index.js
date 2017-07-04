// tools
import styled from "styled-components"

// css
export const GridRow = styled.div`
	display: flex;
  align-content: flex-start;
  align-items: stretch;
`
export const Square = styled.div`
  width: calc(100% / 3 - ${ props => props.theme.size.block.border / 1.5 }px);
  margin: 0 ${ props => props.theme.size.block.border }px ${ props => props.theme.size.block.border }px 0;
  &:last-child { margin-right: 0; }
  img { width: 100%; }
`
