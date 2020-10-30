//合并reducer
import { combineReducers } from "redux"
// import testData from "./testData"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  authReducer,
  // testData
})

export default rootReducer