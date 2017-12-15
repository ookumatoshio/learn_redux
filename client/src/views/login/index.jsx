import React from 'react'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton';

const authSuccess = () => ({
  type: 'AUTH_SUCCESS'
})

class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton label="Login Here!" onClick={this.props.login} />
        <RaisedButton
          label="User List"
          style={{ marginLeft: 10 }}
          onClick={() => this.props.push('/user_list')}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(authSuccess())
    dispatch(push('/'))
  },
  push: path => dispatch(push(path)),
});

export default connect(null, mapDispatchToProps)(LoginContainer);