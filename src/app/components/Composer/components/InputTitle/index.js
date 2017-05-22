// tools
import React from "react"
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