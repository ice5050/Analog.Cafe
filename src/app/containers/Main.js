// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// views
  // dynamic
import List from "./List"
import Post from "./Post"
  // static
import { About, NotFound, SignIn } from "../components/views"
import { Submit } from "../components/views/Submit"

// rebder
export default props => (
  <main>
    <Switch>

      {/* dynamic urls and views */}
      <Route exact path="/author/*"			component={ List } />
      <Route exact path="zine/*"				component={ Post } />

      {/* dynamic views, static urls */}
      <Route exact path="/"             component={ List } />
      <Route exact path="/photo-essays"	component={ List } />
      <Route exact path="/articles"			component={ List } />

      {/* static views and urls */}
      <Route exact path="/about"        component= { About } />
      <Route path="/submit"             component= { Submit } />
      <Route exact path="/sign-in"      component={ SignIn } />
      <Route                            component={ NotFound } />

    </Switch>
  </main>
)
