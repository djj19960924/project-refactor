import React, { Component } from 'react'
import logo from '@utils/images/logo.png'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'
import './index.less'

const { SubMenu } = Menu;
/**
 * 左侧导航的组件
*/


class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="left-nav">
        <Link to='/' className="left-nav-header">
          <img src={logo} />
          <h1>后台管理系统</h1>
        </Link>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
            <Menu.Item key="5" icon={<MailOutlined />}>品类管理</Menu.Item>
            <Menu.Item key="6" icon={<MailOutlined />}>商品管理</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      

    );
  }
}
 
export default LeftNav;