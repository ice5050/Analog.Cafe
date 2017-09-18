// tools
import React from "react"
import Loadable from "react-loadable"

// redux
import { connect } from "react-redux"
import { forget as forgetUser } from "../../../../actions/userActions"

// components
import Forbidden from "../../_screens-errors/Forbidden"
import { LinkButton, ButtonGroup } from "../../../components/Button"
import Link from "../../../components/Link"
import AsyncArticleLoader from "../../../components/_screens/AsyncArticleLoader"

import { ROUTE_AUTH_USER_LANDING } from "../../../../constants/user"

// async components
// `/components/_screens/AppRoutes.js`
// `/components/_screens/AppRoutesSubmit.js`
// `/containers/_screens-auth/Me/index.js`
const AsyncList = Loadable({
  loader: () => import("../../List"),
  loading: AsyncArticleLoader,
  delay: 100
})

// render
const Me = props => {
  return props.user.status === "ok" ? (
    <AsyncList
      header={
        <ButtonGroup>
          <LinkButton
            to={ROUTE_AUTH_USER_LANDING + "/edit"}
            red
            style={{ margin: "0 auto" }}
          >
            Edit Your Profile
          </LinkButton>
          <strong>
            <Link to="/" onClick={props.forgetUser}>
              Sign Out
            </Link>
          </strong>
        </ButtonGroup>
      }
      private
    />
  ) : (
    <Forbidden />
  )
}

// connet with redux
const mapDispatchToProps = dispatch => {
  return {
    forgetUser: () => {
      dispatch(forgetUser())
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Me)
