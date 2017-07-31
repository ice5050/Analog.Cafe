// tools
import React from "react"
import { Redirect, Route } from "react-router-dom"

// render
export default props => {
    return props.userStatus === "forbidden"
      ? <Redirect to={props.rejectPath}/>
      : <Route { ...props } />
}
