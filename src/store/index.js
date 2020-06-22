import { createStore, combineReducers, applyMiddleware } from "redux"
import { postReducer } from "./reducers/postReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  post: postReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
