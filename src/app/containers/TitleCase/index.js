// tools
import React from "react"
import toTitleCase from "titlecase"

// components
import { TitleTextarea as Title, SubtitleTextarea as Subtitle } from "../../components/InputText"

// return
// (auto-capitalize titles)
export class TitleCase extends React.Component {
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
    return (
			<div>
				{ this.props.title
					? <Title
			    	value={				this.state.value }
			    	onChange={		this.handleChange }
			    	className={ 	this.props.className }
			    	placeholder={	this.props.placeholder }
			    />
					: <Subtitle
			    	value={				this.state.value }
			    	onChange={		this.handleChange }
			    	className={ 	this.props.className }
			    	placeholder={	this.props.placeholder }
			    />
				}
			</div>
		)
  }
}
