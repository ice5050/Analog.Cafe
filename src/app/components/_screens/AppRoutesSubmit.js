// tools
import React from "react"
import { Switch, Route } from "react-router-dom"

// components
import Submit from "./Submit"
import Composer from "./Composer"
import SubmitSoon from "./SubmitSoon"
import NotFound from "../../containers/_screens-errors/NotFound"

// render
export default props => {
  // Composer isn't ready for production yet.
  if (process.env.NODE_ENV === "development")
    return (
      <Switch>
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/submit/compose" component={Composer} />
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
