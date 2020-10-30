import React, { Component } from 'react'
import {Route, Switch, withRouter,Redirect} from 'react-router-dom'
import Test from '@pages/test'
import Charts from '@pages/charts'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <header>头部</header>
        <div>
          <Switch>
            <Route path="/home/test" component={Test} />
            <Route path="/home/charts" component={Charts} />
            <Redirect to="/home/test" />
          </Switch>
        </div>
      </div>
    );
  }
}
 
export default Home;