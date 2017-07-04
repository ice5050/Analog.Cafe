// tools
import React from "react"

// components

// styles
import styled from "styled-components"

const ScreenSlicer = styled.div`
  background:     ${ props => props.theme.color.foreground };
  color:          ${ props => props.theme.color.background };
  width: 					100vw;
  max-width: 			100vw;
  margin:         ${ props=> props.theme.size.block.spacing }em 0;

  ${ props => props.theme.size.breakpoint.min.l`
    margin-left:	calc(( -100vw + ${ props => props.theme.size.block.column.maxwidth.m }px )/2 - ${ props => props.theme.size.block.column.safety }em );
    & > aside {
      margin: 0 auto;
      max-width: ${ props => props.theme.size.block.column.maxwidth.m }px
    }
  `}
  ${ props => props.theme.size.breakpoint.min.xxl`
    margin-left:	calc(( -100vw + ${ props => props.theme.size.block.column.maxwidth.l }px )/2 - ${ props => props.theme.size.block.column.safety }em );
    & > aside {
      margin: 0 auto;
      max-width: ${ props => props.theme.size.block.column.maxwidth.l }px
    }
  `}

  & aside > header {
    padding: ${ props => props.theme.size.block.spacing }em 0 ${ props => props.theme.size.block.column.safety }em 0;
    & > a {
      top:  ${ props => props.theme.size.block.spacing }em;
      right: -${ props => props.theme.size.block.spacing /2 }em;
    }
    & > h3 {
      font-size: ${ props => props.theme.size.font.make.larger / 2 }em;
      overflow: visible;
    }
  }
`

// return
export default props => {
	return (
		<ScreenSlicer>
      <aside>{ props.children }</aside>
    </ScreenSlicer>
	)
}
