// tools
import React from "react"

// redux
import { connect } from "react-redux"
import { fetchCard, setCard } from "../../../../actions/modalActions"


// return
class ModalDispatch extends React.Component {
  invokeModal = event => {
    event.preventDefault()
    this.props.with.request ?
      this.props.fetchCard(this.props.with.request)
    :
      this.props.setCard(
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
		setCard: (info, request) => {
			dispatch(setCard(info, request))
		},
    fetchCard: request => {
			dispatch(fetchCard(request))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(ModalDispatch)
