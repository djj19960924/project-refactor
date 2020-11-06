import React, { Component } from "react"
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Login from './pages/Login/index'
import NotFound from './pages/notFound'
import Admin from './pages/admin'
import { AuthLogin } from './common/Auth'
import './App.less'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" render={(props) => {
          /**
           * 注意：用render没有用从component
           * 1.登录校验：校验当前用户是否已经登录，如果没有登录，跳转到登录页面
           * 2.权限校验
           */
          if (!AuthLogin()) {
            //跳转到登录页面前。记录当前用户要请求的页面，登录成功之后会跳转到用户之前要请求的页面
            return <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }}></Redirect>
          }
          return <Admin {...props}></Admin>
        }} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default App