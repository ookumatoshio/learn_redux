import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import api from '../../api';

class UserList extends React.Component {
  componentWillMount() {
    const dispatch = this.props.dispatch;

    api.get('users', dispatch,
      (res) => {
        dispatch({ type: 'FETCH_USERS', users: res.users });
      },
    );
  }

  render() {
    return (
      <div>
        <div>User List</div>
        <br />
        <RaisedButton label="作成" onClick={() => this.props.history.push('/user_new')} />
        <br />
        <ul>
        {this.props.users.map((user, i) => <li key={i}>{user}</li>)}
        </ul>
      </div>
    );
  }
}

export default connect(store => store)(UserList);