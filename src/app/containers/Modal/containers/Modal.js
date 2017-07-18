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
  // _fetch = () => {
  //   if(this.props.modal.request.url === "" ) return
	// 	axios({
	// 	  method: 			this.props.modal.request.method,
  //     data:         this.props.modal.request.data,
	// 	  url: 					this.props.modal.request.url + ".json",
	// 	})
	// 		.then(response => {
  //       this.props.setData(response.data)
	// 		})
	// 		.catch(error => console.log(error))
  // }
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
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
