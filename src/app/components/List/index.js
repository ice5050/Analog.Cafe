// tools
import React from "react"
import PropTypes from "prop-types"

// styles
import { ListBleed } from "./styles/bleed"
import { ListUl } from "./styles/ul"
import { ListStats } from "./styles/stats"


// return
export const Bleed = props => {
	return <ListBleed>{ props.children }</ListBleed>
}
export const List = props => {
	return <ListUl>{ props.children }</ListUl>
}
export const Stats = props => {
	return <ListStats>{ props.children }</ListStats>
}

// declare
Bleed.propTypes = {
	children: 		PropTypes.element,
}
List.propTypes = {
	children: 		PropTypes.array,
}
Stats.propTypes = {
	children: 		PropTypes.array,
}