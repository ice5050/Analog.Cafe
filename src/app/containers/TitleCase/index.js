// tools
import React from "react"
import toTitleCase from "titlecase"

// components
import { TitleTextarea, SubtitleTextarea } from "../../components/InputText"

// return
const components = {
    title: TitleTextarea,
    subtitle: SubtitleTextarea
}

export default class extends React.Component {
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
		const InputElement = components[this.props.inputDesignation]
    return (
			<InputElement
			    	value={				this.state.value }
			    	onChange={		this.handleChange }
			    	className={ 	this.props.className }
			    	placeholder={	this.props.placeholder }
			/>
		)
  }
}
