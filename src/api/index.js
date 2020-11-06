import ajax from './ajax'

//定义基础路径
const BASE_URL = '//api.jfancymall.com/'

export const getCustomerData = () => ajax(BASE_URL+'customer-service/customer/getLevels',{},'GET')