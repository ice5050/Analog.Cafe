
import { createStore, combineReducers, applyMiddleware } from "redux"
// import logger from "redux-logger"
// import thunk from "redux-thunk"
// import promise from "redux-promise-middleware"

import math from "./reducers/mathReducer"
import user from "./reducers/userReducer"
import composerSave from "./reducers/composerReducer"

export default createStore(
	combineReducers({ math, user, composerSave }),
	{},
	// applyMiddleware(logger(), thunk, promise())
);
