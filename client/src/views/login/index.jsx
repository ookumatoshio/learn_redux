import React from 'react'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton';

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
})

class LoginContainer extends React.Component {
  render() {
    return <RaisedButton label="Login Here!" onClick={this.props.login} />
  }
}

const Login = connect(null, dispatch => ({
  login: () => {
    dispatch(authSuccess())
    dispatch(push('/'))
  }
}))(LoginContainer)

export default Login;