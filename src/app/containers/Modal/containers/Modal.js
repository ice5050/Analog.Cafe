// tools
import React from "react"
import axios from "axios"

// redux
import { connect } from "react-redux"
import { setData, fetchSource, setVisibility } from "../../../../actions/modalActions"


// components
import { ModalCard, ModalWrapper } from "../../../components/Card"

// return
class Modal extends React.Component {
  _fetch = () => {
    if(this.props.modal.source.url === "" ) return
		axios({
		  method: 			this.props.modal.source.method,
		  url: 					this.props.modal.source.url + ".json",
		})
			.then(response => {
        this.props.setData(response.data)
			})
			.catch(error => console.log(error))
  }
  render() { console.log(this.props.modal)
		return(
      <ModalWrapper style={{
        display: this.props.modal.isVisible ? "block" : "none"
      }}>
  			<ModalCard
  				title={ this.props.modal.data.title  }
  				image={ this.props.modal.data.image }
  				text={ this.props.modal.data.text }
  				buttons={ this.props.modal.data.buttons }
          hideModal={ () => this.props.setVisibility(false) }
  			/>
      </ModalWrapper>
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
    fetchSource: fetch => {
			dispatch(fetchSource(fetch))
		},
    setVisibility: isVisible => {
			dispatch(setVisibility(isVisible))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
