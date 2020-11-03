import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="header">
        <div className="header-top">
          <span>欢迎，Admin</span>
          <Link to="/home">退出</Link>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">首页</div>
        </div>
      </div>
    );
  }
}
 
export default Header;