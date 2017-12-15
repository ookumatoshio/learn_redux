// React
import React from 'react';
// Redux
import { connect } from 'react-redux'
// Request
import axios from 'axios';
// UI
import RaisedButton from 'material-ui/RaisedButton';
// ActionCreator
import { fetchUsers, historyPush } from '../../actions';

class UserContainer extends React.Component {
  componentWillMount() {
    axios.get('http://localhost:3000/users').then(res => res.data)
    .then((res) => {
      this.props.fetchUsers(res.users);
    });
  }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <RaisedButton
          label="作成"
          style={{ marginBottom: 10 }}
          onClick={() => this.props.push('/user_new')}
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

const mapDispatchToProps = (dispatch) => {
  return {
    push: path => dispatch(historyPush(path)),
    fetchUsers: users => dispatch(fetchUsers(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);