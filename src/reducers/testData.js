import * as actions from "../constants/test"

const initialState = {
  testData: []
}

const testData = function( state=initialState,action) {
  switch (action.type) {
    case actions.GET_TEST_DATA:
      return action.data
    default:
      return state
  }
}

export default testData