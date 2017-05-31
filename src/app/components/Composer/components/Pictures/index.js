// tools
import React from "react"
import isDataUri from 'is-data-uri'
import isImage from 'is-image'


// styles
import { Figure } from "../../../Pictures"


// export
export class Image extends React.Component {
  state = {};
  componentDidMount() {
    const { node } = this.props
    const { data } = node
    this.load(data)
  }
  load(data) {
  	const file = data.get("file")
  	if(typeof file === "object"){
			const reader = new FileReader()
			reader.addEventListener("load", () => this.setState({ src: reader.result }))
			reader.readAsDataURL(file)
		}
		else {
			
  	console.log(data.get("src"))
			this.setState({ src: data.get("src") })
		}
  }
  render() {
    const { attributes, state, node } = this.props
    const { src } = this.state
    const focus = state.isFocused && state.selection.hasEdgeIn(node)
		const className = focus ? "focus" : "nofocus"
    return src
      ? <Figure {...attributes} src={src} className={className}>Add caption to your image.</Figure>
      : <Figure {...attributes} src="" className={className}>Loading your image...</Figure>
  }
}