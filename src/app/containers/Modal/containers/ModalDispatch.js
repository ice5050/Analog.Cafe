// tools
import React from "react"

// redux
import { connect } from "react-redux"
import { setData, fetch, setVisibility } from "../../../../actions/modalActions"


// return
class ModalDispatch extends React.Component {
  invokeModal = event => {
    event.preventDefault()
    this.props.setVisibility(true)
    this.props.setData(this.props.with.data)
    this.props.fetch(this.props.with.request)
  }
  render() {
    // Wrapper defaults to <a> link, however it could become *any* react component:
    let elementType, elementProps
    if(!this.props.elementType){
      elementType = "a"
      elementProps = { href: "#card" }
    }
    else {
      elementType = this.props.elementType
      elementProps = {}
    }
    const Wrapper = elementType
		return(
      <Wrapper
        onClick={ this.invokeModal.bind(this) }
        { ...elementProps }>
        { this.props.children }
      </Wrapper>
		)
	}
}


// connet with redux
const mapStateToProps = state => {
	return {
    modal: state.modal,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		setData: data => {
			dispatch(setData(data))
		},
    fetch: request => {
			dispatch(fetch(request))
		},
    setVisibility: isVisible => {
			dispatch(setVisibility(isVisible))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalDispatch)
