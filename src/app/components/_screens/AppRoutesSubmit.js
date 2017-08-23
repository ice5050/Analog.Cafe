// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Submit from "./Submit"
import Composer from "./Composer"
import SubmitSoon from "./SubmitSoon"
import NotFound from "../../containers/_screens-errors/NotFound"
import SubmitConfirm from "../../containers/_screens-auth/SubmitConfirm"

// render
export default props => {
  // Composer isn't ready for production yet.
  if (process.env.NODE_ENV === "development")
    return (
      <Switch>
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/submit/compose" component={Composer} />

        {/* Signin & upload submission */}
        <Route
          exact
          path="/submit/confirm-full-consent"
          component={SubmitConfirm}
        />
        <Route
          exact
          path="/submit/confirm-full-consent"
          component={SubmitConfirm}
        />

        {/* Not found routes */}
        <Route path="/submit/*" component={NotFound} />
      </Switch>
    )
  else
    return (
      <Switch>
        <Route exact path="/submit" component={SubmitSoon} />
        <Route path="/submit/*" component={NotFound} />
      </Switch>
    )
}
