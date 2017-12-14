import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import axios from 'axios';
import api from '../../api';
import { fetchUsers, showProgress } from '../../actions';

class UserList extends React.Component {
  componentWillMount() {
    const dispatch = this.props.dispatch;

    // api.get('users', dispatch,
    //   (res) => {
    //     dispatch({ type: 'FETCH_USERS', users: res.users });
    //   },
    // ).catch(error => console.log('hoge'));

    dispatch(showProgress(true));
    axios.get('http://localhost:3000/users').then(res => res.data)
    .then((res) => {
      dispatch(showProgress(false));
      dispatch(fetchUsers(res.users));
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