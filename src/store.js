
import { createStore, combineReducers, /*applyMiddleware*/ } from "redux"
// import logger from "redux-logger"
// import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"

import composer from "./reducers/composerReducer"
import nav from "./reducers/navReducer"
import modal from "./reducers/modalReducer"

export default createStore(
	combineReducers({ composer, nav, modal }),
	{},
	// applyMiddleware(logger(), thunk, promise())
);
