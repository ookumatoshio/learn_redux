import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import axios from 'axios';
import api from '../../api';
import { fetchUsers } from '../../actions';

class UserList extends React.Component {
  componentWillMount() {

    // api.get('users', dispatch,
    //   (res) => {
    //     dispatch({ type: 'FETCH_USERS', users: res.users });
    //   },
    // ).catch(error => console.log('hoge'));
    console.log('in user_list cwm');
    axios.get('http://localhost:3000/users').then(res => res.data)
    .then((res) => {
      console.log('res', res.users);
      // 基本的なアクションはtypeを同じ名前にして、
      // connectで受け取るdispatchを変えれば共通化できそう。
      this.props.fetch;
    })
  }

  render() {
    return (
      <div>
        <div>User List</div>
        <br />
        <RaisedButton label="作成" onClick={() => this.props.push} />
        <br />
        {
          //this.props.users.map(user => <li key={user}>{user}</li>)
        }
        <ul>
        </ul>
      </div>
    );
  }
}

//const mapStateToProps = state => { users: state.users };

const mapStateToProps = (state) => {
  return { users: state.users };
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: () => { dispatch(push('/user_new'))},
    fetch: () => { dispatch(fetchUsers) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);