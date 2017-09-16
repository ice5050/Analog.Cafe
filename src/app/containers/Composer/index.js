// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import HeaderEditor from "./containers/HeaderEditor"
import ContentEditor from "./containers/ContentEditor"
import { Section } from "../../components/ArticleStyles"

// placeholders
const titlePlaceholder = {
  title: "Title",
  subtitle: "Subtitle (Optional)"
}

// return
const Composer = props => {
  console.log(this.props.user.status)
  return (
    <div>
      <HeaderEditor
        composerState={props.composerState}
        pageTitle={titlePlaceholder.title}
        pageSubtitle={titlePlaceholder.subtitle}
        user={props.user}
      />
      <Section>
        <ContentEditor
          composerState={props.composerState}
          ref={input => {
            this.contentEditor = input
          }}
        />
      </Section>
    </div>
  )
}

// connect with redux
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Composer)
