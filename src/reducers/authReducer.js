import * as actions from "../constants/auth"

const initialState = {
  user: {

  },
  token: localStorage.getItem("APP_LOGIN_USER"),
  isLogin: false
}

const authReducer = function( state=initialState,action) {
  console.log(action)
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state,token:action.res.access_token,isLogin:true }
      
    default:
      return state
  }
}

export default authReducer