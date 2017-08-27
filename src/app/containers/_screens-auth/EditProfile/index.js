// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import Forbidden from "../../_screens-errors/Forbidden"
import { CardEditable } from "../../../components/Card"

import Heading from "../../../components/ArticleHeading"
import { LinkButton } from "../../../components/Button"
import { Article } from "../../../components/ArticleStyles"

// render
const EditProfile = props => {
  return props.user.status !== "ok"
    ? <Article>
        <Heading pageTitle="Edit Your Profile" />
        <CardEditable
        //
        //
        //
        // SAMPLE PROPS:
        // THESE VALUES ARE INSERTED FROM MONGO > USERS
        //
        // title="Author Name"
        // text="Short author bio."
        // image="/images/avatars/dmitrizzle.jpg"
        // buttons={[
        //   {
        //     to: "/author/dmitrizzle",
        //     text: "More on Analog.Cafe",
        //     red: true
        //   },
        //   {
        //     to: "https://twitter.com/dmitrizzle/1237837468976r987s",
        //     text: "Follow on Twitter"
        //   }
        // ]}
        //
        //
        //
        />
        <LinkButton to="/me" red>
          Done
        </LinkButton>
      </Article>
    : <Forbidden />
}

// connet with redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(EditProfile)
