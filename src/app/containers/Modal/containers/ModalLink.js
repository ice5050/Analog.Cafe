// tools
import React from "react"

// redux
import { connect } from "react-redux"
import { setData, fetchSource, setVisibility } from "../../../../actions/modalActions"


// components

// return
class ModalLink extends React.Component {
  invokeModal = (event) => {
    event.preventDefault()
    this.props.setVisibility(true)
    this.props.setData(this.props.with.data)
  }
  render() {
		return(
      <a href="#card" onClick={ this.invokeModal.bind(this) }>
  			{/* <ModalCard
  				title={ this.props.modal.data.title  }
  				image={ this.props.modal.data.image }
  				text={ this.props.modal.data.text }
  				buttons={ this.props.modal.data.buttons }
          hideModal={ () => this.props.setVisibility({ display: "none" }) }
  			/> */}
        { this.props.children }
      </a>
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalLink)
