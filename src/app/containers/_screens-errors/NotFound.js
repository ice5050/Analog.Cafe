// tools
import React from "react"
import { withRouter } from "react-router"
import Link from "../../components/Link"
import Helmet from "react-helmet"

// components
import Heading from "../../components/ArticleHeading"
import { Section, Article } from "../../components/ArticleStyles"

import errorMessage from "../../../constants/error-messages"

// render
class NotFound extends React.PureComponent {
  componentWillMount = () => {
    this.props.history.replace({
      state: {
        status: "404"
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
          <title>{errorMessage.VIEW_TEMPLATE.ARTICLE.title}</title>
        </Helmet>
        <Heading
          pageTitle={errorMessage.VIEW_TEMPLATE.ARTICLE.title}
          pageSubtitle={errorMessage.VIEW_TEMPLATE.ARTICLE.subtitle}
          title={errorMessage.DISAMBIGUATION.CODE_403.error}
        />
        <Section>
          <p style={{ textAlign: "center" }}>
            Click{" "}
            <strong>
              <Link to="/">here</Link>
            </strong>{" "}
            to go to homepage.
          </p>
        </Section>
      </Article>
    )
  }
}
export default withRouter(NotFound)
