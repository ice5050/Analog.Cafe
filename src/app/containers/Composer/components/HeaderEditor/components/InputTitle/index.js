// tools
import React from "react"
import PropTypes from "prop-types"
import toTitleCase from "titlecase"

// components
import TextArea from "../../../../../../components/TextArea"



// return
// (auto-capitalize titles)
export class InputTitle extends React.Component {
	constructor(props) {
    super(props)
    this.state = { value: props.value || "" }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = event => {
    this.setState({ value: toTitleCase(event.target.value) })
    this.props.onChange(event.target.value)
  }
  render() {
    return <TextArea
    	value={				this.state.value }
    	onChange={		this.handleChange }
    	className={ 	this.props.className }
    	placeholder={	this.props.placeholder }
    />
  }
}

// declare
TextArea.propTypes = {
	value: 				PropTypes.string,
	placeholder:	PropTypes.string,
	onChange:		 	PropTypes.func,
	className: 		PropTypes.any,
}
