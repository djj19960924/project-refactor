import * as actions from "../constants/auth"
import { SaveLoginUserInfo } from '../common/Auth'

/**
 * 接收用户的同步action
*/
export const login_success = (res) => ({type:actions.LOGIN_SUCCESS,res})
/**
 * 登录的异步action
*/
export const login_user = (userData) => {
  return dispatch => {
    //1.发登录的异步ajax请求
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
      //2.请求结束，分发同步action
      //2.1 如果成功了，分发成功的同步action
      const token = "bearer"+res.access_token;
      SaveLoginUserInfo(token)
      dispatch(login_success(res))
      //2.2 如果失败了，分发失败的同步action
    })
  }
}
