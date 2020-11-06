import * as actions from "../constants/customer"

const initialState = {
  levels: []
}

const customerReducer = function( state=initialState,action) {
  switch (action.type) {
    case actions.INIT_CUSTOMERLEVEL_DATA:
      const newState = JSON.parse(JSON.stringify(state))
      newState.levels = action.data
      return newState
    default:
      return state
  }
}

export default customerReducer