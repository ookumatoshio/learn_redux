import React from 'react';

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton';

import api from '../../api';
import { setUsers } from '../../actions/user_actions';

class UserContainer extends React.Component {
  componentWillMount() {
    api.hoget('users').then((res) => {
      this.props.dispatch(setUsers(res.users));
    })
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <RaisedButton
          label="作成"
          style={{ marginBottom: 10 }}
          onClick={() => this.props.dispatch(push('/user_new'))}
        />
        <ul>
        {this.props.users.map(user => <li key={user}>{user}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps)(UserContainer);