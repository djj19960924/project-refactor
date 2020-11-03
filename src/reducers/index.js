//合并reducer
import { combineReducers } from "redux"
// import testData from "./testData"
import authReducer from "./authReducer"
import customerReducer from "./customerReducer"

const rootReducer = combineReducers({
  authReducer,
  customerReducer
  // testData
})

export default rootReducer