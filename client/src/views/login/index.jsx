import React from 'react';

import { connect } from 'react-redux'

import { RaisedButton } from 'material-ui';

import api from '../../api';

import { historyPush, setSystemErrors } from '../../actions/common_actions';

class UserContainer extends React.Component {

  handleLogin() {
    api.post('login').then((res) =>{
      if (!res.errors) {
        this.props.dispatch(historyPush('/user_list'));
      } else {
        this.props.dispatch(setSystemErrors(res.errors));
      }
    }).catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>ログイン画面</h1>
        <RaisedButton
          label="ログイン"
          onClick={() => this.handleLogin()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps)(UserContainer);