import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as customerActions from '../../actions/customerActions'

@connect(
  state => ({
    customer: state.customerReducer
  }),
  {...customerActions}
)
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.props.get_customer_levels()
  }

  render() { 
    return ( 
      <div>
        Home
      </div>
    );
  }
}
 
export default Home;