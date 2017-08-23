// tools
import React from "react"
import { withRouter } from "react-router"

// components
import Link from "../../components/Link"
import Heading from "../../components/ArticleHeading"
import { Article, Section } from "../../components/ArticleStyles"

class AlreadyAuthenticated extends React.PureComponent {
  componentWillMount() {
    this.props.history.replace({
      state: {
        status: "103" // already authenticated
      }
    })
  }
  componentWillUnmount() {
    this.props.history.replace({
      state: {
        status: "200"
      }
    })
  }
  render() {
    return (
      <Article>
        <Heading pageTitle="😏" pageSubtitle="You Are Already Signed In!" />
        <Section>
          <p style={{ textAlign: "center" }}>
            Click{" "}
            <strong>
              <Link to="/my-stuff">here</Link>
            </strong>{" "}
            to see your stuff.
          </p>
        </Section>
      </Article>
    )
  }
}

export default withRouter(AlreadyAuthenticated)
