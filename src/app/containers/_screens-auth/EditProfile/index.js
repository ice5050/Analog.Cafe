// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import Forbidden from "../../_screens-errors/Forbidden"
import { Button, ButtonGroup } from "../../../components/Button"
import Link from "../../../components/Link"

// render
const Me = props => {
  return props.user.status !== "ok" ? <div>Edit profile</div> : <Forbidden />
}

// connet with redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Me)
