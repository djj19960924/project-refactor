import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import Test from '@pages/test'
import { Layout } from 'antd';
import LeftNav from '@components/left-nav'
import Header from '@components/header'
import './index.less'
import Home from '@pages/home'
import Category from '@pages/category'
import Product from '@pages/product'
import Role from '@pages/role'
import User from '@pages/user'
import Bar from '@pages/charts/bar'
import Line from '@pages/charts/line'
import Pie from '@pages/charts/pie'

const { Footer, Sider, Content } = Layout;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{background: '#FFF'}}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/product" component={Product} />
              <Route path="/role" component={Role} />
              <Route path="/user" component={User} />
              <Route path="/charts/bar" component={Home} />
              <Route path="/charts/line" component={Line} />
              <Route path="/charts/pie" component={Pie} />
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center',color: '#ccc'}}>后台管理系统</Footer>
        </Layout>
      </Layout>

    );
  }
}

export default Admin;