// tools
import React from "react"
// import axios from "axios"

// redux
import { connect } from "react-redux"
import { setData, setVisibility } from "../../../../actions/modalActions"


// components
import { ModalCard, ModalWrapper } from "../../../components/Card"

// return
const Modal = props => {
		return(
      <ModalWrapper style={{
        display: props.modal.isVisible ? "block" : "none"
      }}>
  			<ModalCard
  				title={ props.modal.data.title  }
  				image={ props.modal.data.image }
  				text={ props.modal.data.text }
  				buttons={ props.modal.data.buttons }
          hideModal={ () => props.setVisibility(false) }
  			/>
      </ModalWrapper>
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
		setData: data => {
			dispatch(setData(data))
		},
    setVisibility: isVisible => {
			dispatch(setVisibility(isVisible))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Modal)
