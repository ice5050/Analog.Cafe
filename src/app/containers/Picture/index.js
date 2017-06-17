// tools
import React from "react"
import axios from "axios"

// styles
import { Figure } from "../../components/Picture"

// dictionary
const ROUTE_IMAGE_API = "/api/image"

// export
export class Image extends React.Component {
  state = {};
  componentDidMount() {
    const { node } = this.props
    const { data } = node
    this.load(data.get("file"), data.get("src"))
  }
  load(file, src) {
  	if(!file || !file.name){
  		this.setState({ src })

			// if the same one author passed as a prop to entire Editor, do not fetch each author for each image:
  		if(this.props.editor.props.author){ 
  			this.setState({ author:	this.props.editor.props.author }) 
  			return
  		}
  		
  		// convert file path to just file name:
  		let imageName = src.split('\\').pop().split('/').pop() 	// get rid of domain and pathname
  		imageName 		= imageName.replace(/\.[^/.]+$/, "") 			// get rid of extension
  		// get image info from DB:
  		this._fetch(imageName)
  		  		
  	}
  	else {
			const reader = new FileReader()
			reader.addEventListener("load", () => this.setState({ src: reader.result }))
			reader.readAsDataURL(file)
		}
  }
  _fetch = (imageName) => {
  	let slug = "/" + imageName
  	axios.get(ROUTE_IMAGE_API + slug + ".json")
			.then(response => {
				let data = response.data
				this.setState({ author:	data.author })
			})
			.catch(error => console.log(error))
  }
  render() {
  	const author = this.props.editor.props.author // get author name from props for components that provide it
  																								// such as the Composer
  																								
    const { attributes, state, node } = this.props
    const { src } = this.state
    const focus = state.isFocused && state.selection.hasEdgeIn(node)
		const className = focus ? "focus" : "nofocus"
    return src
      ? <Figure
      		{ ...attributes } 
      		src={ src } 
      		className={ className }
      		author={ this.state.author }
      	>Image subtitle.</Figure>
      : <Figure { ...attributes } src="" className={ className }>Loading your image...</Figure>      
  }
}