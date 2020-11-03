import * as actions from "../constants/customer"

const initialState = {
  levels: []
}

const customerReducer = function( state=initialState,action) {
  switch (action.type) {
    case actions.CUSTOMER_LEVELS_LIST:
      // return { levels:actions.data }
    default:
      return state
  }
}

export default customerReducer