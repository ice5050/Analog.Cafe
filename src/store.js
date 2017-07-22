
import { createStore, combineReducers, applyMiddleware } from "redux"
// import logger from "redux-logger"
import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"

import composer from "./reducers/composerReducer"
import nav from "./reducers/navReducer"
import modal from "./reducers/modalReducer"
import list from "./reducers/listReducer"

export default createStore(
	combineReducers({ composer, nav, modal, list }),
	{},
	applyMiddleware(/*logger(), promise(),*/ thunk)
);
