// tools
import React from "react"
import axios from "axios"

// redux
import { connect } from "react-redux"
import { setData, fetchSource, setVisibility } from "../../../actions/modalActions"


// components
import { ModalCard, ModalWrapper } from "../../components/Card"

// return
class Modal extends React.Component {

  _fetch = () => {
  	let slug = this.props.modal.source.url
		// fetch & update state
		if(this.props.modal.source.url === slug) return
    if(this.props.modal.source.url === "" ) return
		axios({
		  method: 			this.props.modal.source.method,
		  url: 					slug + ".json",
		})
			.then(response => {
				let data = response.data
        this.props.setData(response.data)
        this.props.fetchSource({ url: slug })
			})
			.catch(error => console.log(error))
  }

  // componentDidMount = () => this._fetch()
  // componentDidUpdate = () => this._fetch()
	// need condition for componentWillUnmount()

  render() { console.log(this.props.modal.style)
		return(
      <ModalWrapper style={ this.props.modal.style }>
  			<ModalCard
  				title={ this.props.modal.data.title  }
  				image={ this.props.modal.data.image }
  				text={ this.props.modal.data.text }
  				buttons={ this.props.modal.data.buttons }
          hideModal={ () => this.props.setVisibility({ display: "none" }) }
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
    setVisibility: style => {
			dispatch(setVisibility(style))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
