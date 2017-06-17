// tools
import React from "react"
import PropTypes from "prop-types"

// styles
import { ListBleed } from "./styles/bleed"
import { ListUl } from "./styles/ul"
import { ListStats } from "./styles/stats"
import { ListCaption } from "./styles/caption"
import { ListZigzagPicture } from "./styles/zigzag-picture"


// return
export const Bleed = props => {
	return <ListBleed>{ props.children }</ListBleed>
}
export const List = props => {
	return <ListUl { ...props } >{ props.children }</ListUl>
}
export const Stats = props => {
	return <ListStats { ...props } >{ props.children }</ListStats>
}
export const Caption = props => {
	return <ListCaption>{ props.children }</ListCaption>
}
export const ZigzagPicture = props => {
	return <ListZigzagPicture { ...props } >{ props.children }</ListZigzagPicture>
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
Caption.propTypes = {
	children: 		PropTypes.string,
}
ListZigzagPicture.propTypes = {
	children: 		PropTypes.string,
}