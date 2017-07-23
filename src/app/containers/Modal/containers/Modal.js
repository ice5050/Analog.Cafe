// tools
import React from "react"
import ReactGA from "react-ga"

// redux
import { connect } from "react-redux"
import { hideModal } from "../../../../actions/modalActions"


// components
import { ModalCard, ModalOverlay } from "../../../components/Card"

// return
const Modal = props => {
		if(!props.modal.hidden && props.modal.status === "ok"){
			ReactGA.modalview(props.modal.requested.url)
		}
		return(
      <ModalOverlay
				style={{
	        display: props.modal.hidden ? "none" : "block"
	      }}
				onClick={ () => props.hideModal() }
			>
  			<ModalCard
  				title={ props.modal.info.title  }
  				image={ props.modal.info.image }
  				text={ props.modal.info.text }
  				buttons={ props.modal.info.buttons }
  			/>
      </ModalOverlay>
		)
}


// connet with redux
const mapStateToProps = state => {
	return {
    modal: state.modal,
	}
}
const mapDispatchToProps = dispatch => {
	return {
    hideModal: () => {
			dispatch(hideModal())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
