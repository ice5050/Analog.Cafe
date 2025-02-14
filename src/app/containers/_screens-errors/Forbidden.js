// tools
import React from "react"
import { withRouter } from "react-router"
import Helmet from "react-helmet"

// components
import Link from "../../components/Link"
import Heading from "../../components/ArticleHeading"
import { Article, Section } from "../../components/ArticleStyles"

import errorMessages from "../../../constants/messages/errors"

class NotFound extends React.PureComponent {
  componentWillMount = () => {
    this.props.history.replace({
      state: {
        status: "403"
      }
    })
  }
  componentWillUnmount = () => {
    this.props.history.replace({
      state: {
        status: "200"
      }
    })
  }
  render = () => {
    return (
      <Article>
        <Helmet>
          <title>{errorMessages.VIEW_TEMPLATE.ARTICLE.title}</title>
        </Helmet>
        <Heading
          pageTitle={errorMessages.VIEW_TEMPLATE.ARTICLE.title}
          pageSubtitle={errorMessages.VIEW_TEMPLATE.ARTICLE.subtitle}
          title={errorMessages.DISAMBIGUATION.CODE_403.error}
        />{" "}
        <Section>
          <p style={{ textAlign: "center" }}>
            You need to{" "}
            <strong>
              <Link to="/sign-in">sign in</Link>
            </strong>{" "}
            to view this page.
          </p>
        </Section>
      </Article>
    )
  }
}

export default withRouter(NotFound)
