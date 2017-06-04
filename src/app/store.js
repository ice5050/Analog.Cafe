// tools
//import { createStore, combineReducers, applyMiddleware } from "redux"
import { createStore, combineReducers } from "redux"


// reducers
import composer from "./reducers/composerReducer"
//import user from "./reducers/userReducer"

// store
export default createStore(
	combineReducers({ composer }), 
	//combineReducers({ composer, user }), 
	{}, 
	//applyMiddleware(logger(), thunk, promise())
)