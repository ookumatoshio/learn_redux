import React from 'react'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton';

const authFail = () => ({
  type: 'AUTH_FAIL'
})

class HomeContainer extends React.Component {
  render() {
    return <RaisedButton label="Logout Here!" onClick={this.props.logout} />
  }
}

const Home = connect(null, dispatch => ({
  logout: () => {
    dispatch(authFail())
    dispatch(push('/login'))
  }
}))(HomeContainer);

export default Home;