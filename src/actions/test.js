import * as actions from "../constants/test"

export const get_test_data = () => {
  return dispatch => {
    fetch("/api/list")
    .then(res => res.json())
    .then(data => {
      dispatch({type:actions.GET_TEST_DATA,data})
    })
    .catch(error=>{
      console.log(error);
    })
  }
}