import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import axios from 'axios';
import api from '../../api';
import { fetchUsers } from '../../actions';

class UserList extends React.Component {
  componentWillMount() {
    const dispatch = this.props.dispatch;

    // api.get('users', dispatch,
    //   (res) => {
    //     dispatch({ type: 'FETCH_USERS', users: res.users });
    //   },
    // ).catch(error => console.log('hoge'));

    axios.get('http://localhost:3000/users').then(res => res.data)
    .then((res) => {
      // 基本的なアクションはtypeを同じ名前にして、
      // connectで受け取るdispatchを変えれば共通化できそう。
      dispatch(fetchUsers(res.users));
    })
  }

  render() {
    return (
      <div>
        <div>User List</div>
        <br />
        <RaisedButton label="作成" onClick={() => this.props.dispatch(push('/user_new'))} />
        <br />
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

export default connect(mapStateToProps)(UserList);