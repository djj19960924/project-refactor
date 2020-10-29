import * as actions from "../constants/auth"

const initialState = {
  user: {}
}

const authReducer = function( state=initialState,action) {
  switch (action.type) {
    case actions.LOGIN:
      return action.data
    default:
      return state
  }
}

export default authReducer