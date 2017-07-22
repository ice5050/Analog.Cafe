// tools
import React from "react"

// redux
import { connect } from "react-redux"
import { fetchModal, setModal } from "../../../../actions/modalActions"


// return
class ModalDispatch extends React.Component {
  invokeModal = event => {
    event.preventDefault()
    this.props.with.request ?
      this.props.fetchModal(this.props.with.request)
    :
      this.props.setModal(
        {
          status: "ok",
          info: this.props.with.info
        },
        { url: this.props.with.id }
      )
  }
  render() {
    // Wrapper defaults to <a> link, however it could become *any* react component:
    let wrapperElement, wrapperProps
    if(!this.props.wrapperElement){
      wrapperElement = "a"
      wrapperProps = { href: "#card" }
    }
    else {
      wrapperElement = this.props.wrapperElement
      wrapperProps = {}
    }
    const Wrapper = wrapperElement
		return(
      <Wrapper
        onClick={ this.invokeModal.bind(this) }
        { ...wrapperProps }>
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
		setModal: (info, request) => {
			dispatch(setModal(info, request))
		},
    fetchModal: request => {
			dispatch(fetchModal(request))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ModalDispatch)
