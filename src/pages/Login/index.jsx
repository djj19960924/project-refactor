import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import * as authActions from '../../actions/authActions'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import './index.less'

const FormItem = Form.Item;

@withRouter
@connect(
  state => ({
    auth: state.authReducer
  }),
  {...authActions}
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onFinish = this.onFinish.bind(this)
  }

  onFinish = (values) => {
    const dataObj = {
      password: values.password,
      username: values.username
    }
    //1.发登录的异步ajax请求
    this.props.login_user(dataObj)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  
  render() {
    if(this.props.auth.isLogin) {
      if(this.props.location.state) {
        return <Redirect to={`${this.props.location.state.from.pathname}`} />
      }else {
        return <Redirect to='/' />
      }
    }
    return (
      <div name="Login" className="Login" style={{ textAlign: 'center' }}>
        {/*表单容器*/}
        <div className="loginContainer">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <FormItem
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </FormItem>
          <FormItem
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <Checkbox className="remember">保存当前用户名</Checkbox>
            <a className="loginFormForgot" href="">
              忘记密码？请点击
            </a>
            <Button type="primary" 
              htmlType="submit" 
              className="loginFormButton"
              style={{width: '100%', marginTop: '10px'}}
            >登录</Button>
          </FormItem>
        </Form>
          <p className="info">欢迎登陆后台管理系统</p>
        </div>
      </div>
    );
  }
}

export default Login;