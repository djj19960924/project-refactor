import * as actions from "../constants/customer"
import { getCustomerData } from '../api/index'

export const get_customer_levels = () => {
  return async dispatch => {
    const { data } = await getCustomerData();
    dispatch({
      type:actions.INIT_CUSTOMERLEVEL_DATA,
      data
    })
  }
}