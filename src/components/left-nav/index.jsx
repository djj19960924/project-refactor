import React, { Component } from 'react'
import logo from '@utils/images/logo.png'
import { Link,withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import menuConfig from "@config/menuConfig"

import './index.less'

const { SubMenu } = Menu;

/**
 * 左侧导航的组件
*/
@withRouter
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  /**
   * 
   * @param {*} menuConfig
   * 根据menu的数据数组生成对应的标签数组
   * 使用map() + 递归调用 
   */
  getMenuNodes(menuConfig) {
    const path = this.props.location.pathname
    //得到需要打开菜单项的key
    return menuConfig.map(item=>{
      if(!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        )
      }else {
        //查找一个与当前请求路径匹配的子Item
        const cItem = item.children.find(cItem => cItem.key===path)
        //如果存在，说明当前item的子列表需要打开
        if(cItem) this.openKey = item.key
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }

  /**
   * 在第一次render()之前执行一次
   * 为第一个render()准备数据(必须同步的)
   */
  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuConfig)
  }
  render() { 
    //得到当前请求的路由路径
    const path = this.props.location.pathname
    //得到需要打开菜单项的key
    const openKey = this.openKey
    return ( 
      <div className="left-nav">
        <Link to='/' className="left-nav-header">
          <img src={logo} />
          <h1>后台管理系统</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
        >
          {this.menuNodes}
        </Menu>
      </div>
      

    );
  }
}
 
export default LeftNav;