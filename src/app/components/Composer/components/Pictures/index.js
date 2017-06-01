// tools
import React from "react"
import ReactDOMServer from 'react-dom/server'

// styles
import { Figure } from "../../../Pictures"


// export
export class Image extends React.Component {

  state = {};

  componentDidMount() {
    const { node } = this.props
    const { data } = node
    const file = data.get('file')
    this.load(file)
  }

  load(file) {
    const reader = new FileReader()
    reader.addEventListener('load', () => this.setState({ src: reader.result }))
    reader.readAsDataURL(file)
  }

  render() {
    const { attributes, node } = this.props
    const { data } = node
    const { src } = this.state
    return src
      ? <img {...attributes} src={src} />
      : <span>Loading...</span>
  }

  
//   render() {
//     const { attributes, state, node, data } = this.props
//     const { src } = this.state
//     console.log(this.node)
//     const focus = state.isFocused && state.selection.hasEdgeIn(node)
// 		const className = focus ? "focus" : "nofocus"
//     return src
//       ? <Figure {...this.props} src={src} className={className}>Add caption to your image.</Figure>
//       : <Figure {...attributes} src="" className={className}>Loading your image...</Figure>
//   }
}