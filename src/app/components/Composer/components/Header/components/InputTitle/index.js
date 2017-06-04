// tools
import React from "react"
import PropTypes from "prop-types"
import toTitleCase from "titlecase"
import Textarea from "react-textarea-autosize"



// return
// (auto-capitalize titles)
export class InputTitle extends React.Component {
	constructor(props) {
    super(props)
    this.state = {value: ""}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: toTitleCase(event.target.value) })
    this.props.onChange(event.target.value)
  }
  render() {
    return <Textarea
    	value={				this.state.value }
    	onChange={		this.handleChange }
    	className={ 	this.props.className }
    	placeholder={	this.props.placeholder }
    />
  }
}

// declare
Textarea.propTypes = {
	value: 				PropTypes.string,
	placeholder:	PropTypes.string,
	onChange:		 	PropTypes.func,
	className: 		PropTypes.any,
}
