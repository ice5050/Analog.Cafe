// tools
import React from "react"
import { withRouter } from "react-router"
import { ModalDispatch } from "../Modal"

// redux & state
import { connect } from "react-redux"
import { fetchPage } from "../../../actions/listActions"
import { setPage as setNextArticle } from "../../../actions/articleActions"
import {
  ROUTE_LIST_API,
  ROUTE_AUTHENTICATED_LIST_API
} from "../../../constants/list"
import { ROUTE_AUTHOR_API } from "../../../constants/author"

// components
import { ListDescription, ListHeader } from "../../components/ListDescription"
import { LinkButton } from "../../components/Button"
import { default as ListBlock } from "../../components/List"
import { Section, Article } from "../../components/ArticleStyles"

// helpers
import { getListMeta } from "./helpers"

// return
class List extends React.Component {
  listAPI = this.props.private ? ROUTE_AUTHENTICATED_LIST_API : ROUTE_LIST_API
  fetchNewList = () => {
    this.props.fetchPage(
      getListMeta(this.props.history.location.pathname, 1, this.listAPI).request
    )
  }
  handleLoadMore = event => {
    event.preventDefault()
    this.props.fetchPage(
      getListMeta(
        this.props.history.location.pathname,
        parseInt(this.props.list.page.current, 0) + 1,
        this.listAPI
      ).request,
      // append items:
      true
    )
  }
  componentDidMount() {
    this.unlisten = this.props.history.listen(location => this.fetchNewList())
    this.fetchNewList()
  }
  componentWillUnmount() {
    this.unlisten()
  }
  render() {
    const renderedListMeta = getListMeta(this.props.location.pathname).meta
    return (
      <div>
        <ListDescription>
          {this.props.header
            ? this.props.header
            : <ListHeader>
                {this.props.list.filters.author
                  ? <q>
                      <em>
                        {renderedListMeta.text}
                        {this.props.list.filters.author.name
                          ? <ModalDispatch
                              with={{
                                request: {
                                  url:
                                    ROUTE_AUTHOR_API +
                                    "/" +
                                    this.props.list.filters.author.id
                                }
                              }}
                            >
                              {this.props.list.filters.author.name}
                            </ModalDispatch>
                          : this.props.location.pathname.includes("/author/") &&
                            "(author)"}
                      </em>.
                    </q>
                  : <q>
                      <em>{renderedListMeta.text}</em>.
                    </q>}
                &nbsp;{renderedListMeta.emoji}
              </ListHeader>}
        </ListDescription>

        <ListBlock
          status={this.props.list.status}
          items={this.props.list.items}
          nextArticleHeading={nextArticleHeading =>
            this.props.setNextArticle({
              title: nextArticleHeading.title,
              subtitle: nextArticleHeading.subtitle,
              author: nextArticleHeading.author,
              slug: nextArticleHeading.slug
            })}
          private={this.props.private}
        />

        {parseInt(this.props.list.page.total, 0) > 1 &&
        parseInt(this.props.list.page.total, 0) >
          parseInt(this.props.list.page.current, 0)
          ? <LinkButton to="#more" red onClick={this.handleLoadMore.bind(this)}>
              Load More
            </LinkButton>
          : null}

        <Article>
          <Section />
        </Article>
      </div>
    )
  }
}

// connet with redux
const mapStateToProps = state => {
  return {
    list: state.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPage: (request, appendItems) => {
      dispatch(fetchPage(request, appendItems))
    },
    setNextArticle: nextArticle => {
      dispatch(setNextArticle(nextArticle))
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
