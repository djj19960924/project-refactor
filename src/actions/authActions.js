import axios from 'axios'
import * as actions from "../constants/auth"
// 引入设置token方法
import setAuthToken from '../utils/AuthToken'

export const login_user = (userData) => {
  return dispatch => {
    let formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', userData.username);
    formData.append('password', userData.password);
    formData.append('scope', 'all');
    formData.append('client_id', 'admin');
    formData.append('client_secret', 'admin123456');
    fetch(`${window.ajaxUrl}/auth-center/oauth/token`, {
      method: 'post',
      body: formData,
    }).then(res => {
      return res.json();
    }).then(res => {
      const token = res.access_token;
      localStorage.setItem('token',token)
      //设置axios的headers token
      setAuthToken(token)
      // dispatch({type:actions.LOGIN,data})
    })
  }
}
