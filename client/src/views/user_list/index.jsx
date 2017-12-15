import React from 'react';

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton';

class UserContainer extends React.Component {
  componentWillMount() {
    setTimeout(() => this.props.fetchUsers(), 1000)
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
    push: path => dispatch(push(path)),
    fetchUsers: () => dispatch({ type: 'FETCH_USERS', users: [1, 2] }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);