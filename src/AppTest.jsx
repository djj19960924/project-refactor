import React, { Component } from "react"
import { connect } from "react-redux"
import * as getTestDataAction from "./actions/test"
import { bindActionCreators } from "redux"
import {Route, Switch, withRouter} from 'react-router-dom';

import './App.less';
@withRouter 
@connect(
  state => ({
    testData: state.testData
  }),
  {...getTestDataAction}
)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.props.get_test_data()
  }

  render() { 
    const { testData } = this.props
    console.log(this.props);
    return ( 
      <div>
        { 
          testData.length?testData.map((item,index)=>(
            <ul key={index}>
              <li>姓名：{item.name}</li>
              <li>姓名：{item.age}</li>
            </ul>
          )):<div/>
        }
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     testData: state.testData
//   }
// }
// //使用bindActionCreators方法
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     getTestDataActions:bindActionCreators(getTestDataAction,dispatch)
//   }
// }
 
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App