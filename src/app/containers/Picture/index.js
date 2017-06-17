// tools
import React from "react"
import axios from "axios"

// components
import { Figure } from "../../components/Picture"
import { TextArea } from "../../components/TextArea"


// dictionary
import { ROUTE_IMAGE_API } from "./routes"

// export
export class Image extends React.Component {
	
	
	// vv STATE FOR CAPTION
	constructor(props) {
    super(props)
    this.state = { caption: props.node.data.get("caption") }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  
  componentWillReceiveProps(nextProps) {
    const caption = nextProps.node.data.get("caption");
    if (caption !== this.state.caption) {
      this.setState({ caption })
    }
  }
  
  onChange(e) {
    const caption = e.target.value
    const { node, editor } = this.props
    const src = node.data.get("src")

    const properties = {data: { caption, src }}

    const next = editor
      .getState()
      .transform()
      .setNodeByKey(node.key, properties)
      .apply()

    editor.onChange(next)
  }

  onClick(e) {
  	e.preventDefault()
    e.stopPropagation()
  }
  // ^^ STATE FOR CAPTION
  
  
    
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
      		composer={ !this.props.readOnly }
      	>
      		{ !this.props.readOnly
						? <TextArea
							value={ this.state.caption }
							placeholder="Add a caption (optional)"
							onChange={ this.onChange }
							onClick={ this.onClick }
						/>
						: <div>{ this.state.caption }</div>
					}
      	</Figure>
      : <Figure { ...attributes } src="" className={ className }>Loading your image...</Figure>      
  }
}