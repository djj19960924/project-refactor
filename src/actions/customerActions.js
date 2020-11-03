import * as actions from "../constants/customer"
import ajax from '../api/ajax'

export const customer_levels_list = (res) => ({type:actions.CUSTOMER_LEVELS_LIST,res})

export const get_customer_levels = () => {
  return async dispatch => {
    const data = await ajax(`${window.ajaxUrl}/customer-service/customer/getLevels`,{},'GET');
    console.log(data)
  }
}