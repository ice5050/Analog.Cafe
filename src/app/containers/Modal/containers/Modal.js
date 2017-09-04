// tools
import React from "react"
import ReactGA from "react-ga"

// redux
import { connect } from "react-redux"
import { hideCard } from "../../../../actions/modalActions"

// components
import { CardModal, ModalOverlay } from "../../../components/Card"

// return
const Modal = props => {
  if (!props.modal.hidden && props.modal.status === "ok") {
    ReactGA.modalview(props.modal.requested.url) // google analytics
  }

  // close card on escape keypress
  document.onkeydown = event =>
    event.keyCode === 27 && !props.modal.hidden ? props.hideCard() : null

  return (
    <ModalOverlay
      id="ModalOverlay"
      style={{
        display: props.modal.hidden ? "none" : "block"
      }}
      onClick={() => props.hideCard()}
    >
      <CardModal
        title={props.modal.info.title}
        image={props.modal.info.image}
        text={
          props.modal.info.text +
          (props.modal.info.error ? " " + props.modal.info.error + "." : "")
        }
        buttons={props.modal.info.buttons}
      />
    </ModalOverlay>
  )
}

// connet with redux
const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}
const mapDispatchToProps = dispatch => {
  return {
    hideCard: () => {
      dispatch(hideCard())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)
