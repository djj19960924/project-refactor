import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import * as authActions from '../../actions/authActions'
import './index.less'

const FormItem = Form.Item;

@connect(
  state => ({
    user: state.user
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
    console.log('Success:', values);
    const dataObj = {
      password: values.password,
      username: values.username
    }
    this.props.login_user(dataObj)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  render() {
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