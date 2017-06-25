// tools
import React from "react"
import axios from "axios"

// components
import Figure from "../../components/Picture"
import { PlainTextarea } from "../../components/InputText"


// dictionary
import { ROUTE_IMAGE_API } from "./routes"

// export
export default class extends React.Component {


	// state for caption
	constructor(props) {
    super(props)
    this.state = { caption: props.node.data.get("caption") }
		this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    const caption = nextProps.node.data.get("caption");
    if (caption !== this.state.caption) {
      this.setState({ caption })
    }
  }
  handleChange(e) {
    const caption = e.target.value
    const { node, editor } = this.props
    const src = node.data.get("src")
    const properties = {data: { caption, src }}
    const next = editor
      .getState()
      .transform()
      .setNodeByKey(node.key, properties)
      .apply()
		editor.onChange(next) // have to use native onChange in editor (rather than handleChange)
  }
  handleClick(e) {
  	e.preventDefault()
    e.stopPropagation()
  }



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
						? <PlainTextarea
							value={ this.state.caption }
							placeholder="Add a caption (optional)"
							onChange={ this.handleChange }
							onClick={ this.handleClick }
						/>
						: <div>{ this.state.caption }</div>
					}
      	</Figure>
      : <Figure { ...attributes } src="" className={ className }>Loading your image...</Figure>
  }
}
