import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
    }
  }
  componentWillMount() {
    axios.get('http://localhost:3000/users').then(res => res.data)
    .then((res) => {
      console.log(res);
      this.setState({ userList: res.users });
    });
  }
  render() {
    return (
      <div>
        <div>User List</div>
        <br />
        <RaisedButton label="作成" onClick={() => this.props.history.push('/user_new')} />
        <br />
        <ul>
        {this.state.userList.map(user => <li key={user}>{user}</li>)}
        </ul>
      </div>
    );
  }
}

export default UserList;