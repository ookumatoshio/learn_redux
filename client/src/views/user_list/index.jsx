import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class UserList extends React.Component {
  render() {
    return (
      <div>
        <div>User List</div>
        <br />
        <RaisedButton label="作成" onClick={() => this.props.history.push('/user_new')} />
      </div>
    );
  }
}

export default UserList;