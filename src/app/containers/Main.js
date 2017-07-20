// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// views
import List from "./List"

// rebder
export default props => (
  <main>
    <Switch>
      <Route exact path="/"             component={ List } />
      <Route exact path="/photo-essays"	component={ List } />
      <Route exact path="/articles"			component={ List } />
      <Route exact path="/author/*"			component={ List } />
    </Switch>
  </main>
)
