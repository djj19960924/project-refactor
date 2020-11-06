/**
 * 能发送ajax请求的函数模块
 * 封装axios库
 * 函数的返回值是promise对象
 */
import axios from 'axios'
import qs from 'qs'
import {HashRouter as Router} from 'react-router-dom' 

let router=new Router(); 

//添加请求拦截器：让post请求的请求体格式为urlencoded格式
axios.interceptors.request.use((config)=>{
  //得到请求方式和请求体数据
  const { method,data } = config
  
  //处理post请求，将data对象转换成query参数格式字符串
  if(method.toLowerCase()==='post'&&typeof data==='object') {
    config.data = qs.stringify(data)
  }
  if(localStorage.APP_LOGIN_USER) {
    config.headers.Authorization = localStorage.APP_LOGIN_USER;
  }
  return config
},(error)=>{
  return Promise.reject(error)
})
//添加相应拦截器
//在请求返回之后且在我们指定的请求回调函数之前
axios.interceptors.response.use((response)=>{
  return response.data //返回的结果就会交给我们指定的请求响应的回调函数
},(error)=>{
  console.log(error.response.status)
  if(error.response.status === 401) {
    router.history.push({
      pathname: '/login',
      state: { from: router.history.location.pathname }
    })
  }
  //统一处理所有的异常错误
  //return Promise.reject(error)
})

export default function ajax(url, data = {}, type = "GET") {
  if (type === 'GET') { //发GET请求
    return axios.get(url, {
      params: data //指定请求参数
    })
  } else if (type === 'POST') { //发POST请求
    return axios.post(url, data)
  } else if (type === 'DELETE') { //发DELETE请求
    return axios.delete()
  } else { //发PUT请求
    return axios.put()
  }
}

