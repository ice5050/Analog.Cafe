// tools
import React from "react"
import Loadable from "react-loadable"
import { Switch, Route } from "react-router-dom"

// views
import NotFound from "../../containers/_screens-errors/NotFound"
import SignIn from "../../containers/_screens-auth/SignIn"
import Me from "../../containers/_screens-auth/Me"
import AppRoutesSubmit from "./AppRoutesSubmit"
import AsyncListLoader from "./AsyncListLoader"
import AsyncArticleLoader from "./AsyncArticleLoader"

// async components
const AsyncList = Loadable({
  loader: () => import("../../containers/List"),
  loading: AsyncListLoader
})
const AsyncArticle = Loadable({
  loader: () => import("../../containers/Article"),
  loading: AsyncArticleLoader
})
const AsyncEditProfile = Loadable({
  loader: () => import("../../containers/_screens-auth/EditProfile"),
  loading: AsyncArticleLoader
})
const AsyncAbout = Loadable({
  loader: () => import("./About"),
  loading: AsyncArticleLoader
})

// render
export default props => {
  return (
    <main>
      <Switch>
        {/* dynamic urls and views */}
        <Route exact path="/author" component={NotFound} />
        <Route exact path="/zine" component={NotFound} />
        <Route exact path="/author/*" component={AsyncList} />
        <Route exact path="/zine/*" component={AsyncArticle} />

        {/* dynamic views, static urls */}
        <Route exact path="/" component={AsyncList} />
        <Route exact path="/photo-essays" component={AsyncList} />
        <Route exact path="/articles" component={AsyncList} />

        {/* auth views */}
        <Route exact path="/me" component={Me} />
        <Route exact path="/me/edit" component={AsyncEditProfile} />
        <Route exact path="/sign-in" component={SignIn} />

        {/* static views and urls */}
        <Route exact path="/about" component={AsyncAbout} />
        <Route path="/submit" component={AppRoutesSubmit} />
        <Route state={{ status: "404" }} component={NotFound} />
      </Switch>
    </main>
  )
}
