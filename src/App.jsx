import React, { Component } from "react"
import {Route, Switch, withRouter,Redirect} from 'react-router-dom'
import Login from './routes/Login/index'
import NotFound from './pages/notFound'
import Home from './pages/home'
import { AuthLogin } from './common/Auth'
import './App.less'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
  }

  render() { 
    return ( 
      <Switch>
        <Route path="/" exact render={(props)=>{
          return <Redirect to="/home"></Redirect>
        }}></Route>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" render={(props)=>{
          /**
           * 注意：用render没有用从component
           * 1.登录校验：校验当前用户是否已经登录，如果没有登录，跳转到登录页面
           * 2.权限校验
           */
          if(!AuthLogin()) {
            //跳转到登录页面前。记录当前用户要请求的页面，登录成功之后会跳转到用户之前要请求的页面
            return <Redirect to={`/login?preUrl=${props.match.path}`}></Redirect>
          } 
          return <Home {...props}></Home>
        }}/>
        
      </Switch>
    );
  }
}
export default App