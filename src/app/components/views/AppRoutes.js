// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// views
  // dynamic
import List from "../../containers/List"
import Post from "../../containers/Post"
import NotFound from "../../containers/NotFound"
import AuthRoute from "./AuthRoute"
  // static
import { About, SignIn } from "./"
import AppRoutesSubmit from "./AppRoutesSubmit"

// render
export default props => {
  return(
    <main>
      <Switch>

        {/* dynamic urls and views */}
        <Route exact path="/author/*"			component={ List } />
        <Route exact path="/zine/*"				component={ Post } />

        {/* dynamic views, static urls */}
        <Route exact path="/"             component={ List } />
        <Route exact path="/photo-essays"	component={ List } />
        <Route exact path="/articles"			component={ List } />

        {/* auth views */}
        <AuthRoute
          exact
          path="/my-stuff"
          rejectPath={ "/sign-in" }
          userStatus={ props.userStatus }
          component={ List }
        />
        {/* <AuthRoute
          exact
          path="/sign-in"
          rejectPath={ "/my-stuff" }
          userStatus={ !props.userStatus }
          component={ SignIn }
        /> */}
        <Route exact path="/sign-in"      component={ SignIn } />

        {/* static views and urls */}
        <Route exact path="/about"        component= { About } />
        <Route path="/submit"             component= { AppRoutesSubmit } />
        <Route state={{"status":"404"}}   component={ NotFound } />


      </Switch>
    </main>
  )
}
