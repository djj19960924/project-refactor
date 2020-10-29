import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers"
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from "redux-logger"

//1.创建store对象
const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(thunk)
));

//2.暴露store对象
export default store;