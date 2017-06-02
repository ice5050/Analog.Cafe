// tools
import React from "react"
import ReactDOMServer from "react-dom/server"
import { Transform } from "slate"

// styles
import { Figure } from "../../../Pictures"


// export
export class Image extends React.Component {

  state = {};

  componentDidMount() {
    const { node } = this.props
    const { data } = node
    this.load(data.get("file"), data.get("src"))
  }

  load(file, src) {
  	console.log(file.name)
  	if(!file.name) this.setState({ src })
  	else {
			const reader = new FileReader()
			reader.addEventListener("load", () => this.setState({ src: reader.result }))
			reader.readAsDataURL(file)
		}
  }

  render() {
    const { attributes, state, node } = this.props
    const { src } = this.state
    const focus = state.isFocused && state.selection.hasEdgeIn(node)
		const className = focus ? "focus" : "nofocus"
    return src
      ? <Figure {...this.props} src={src} className={className}>Add caption to your image.</Figure>
      : <Figure {...attributes} src="" className={className}>Loading your image...</Figure>      
      
      
      
      
  }
}