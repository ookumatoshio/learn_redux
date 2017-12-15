import { push } from 'react-router-redux'

import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const POST_USER = 'POST_USER';

export const fetchUsers = (users) => ({
  type: FETCH_USERS,
  users,
})

export const postUser = (user) => {
  console.log('1:', user)
  return (dispatch) => {
    console.log('2:', user)
    axios.post('http://localhost:3000/users', user).then(res => res.data).then((res) => {
      if (!res.success) {
        dispatch({ type: 'FAILER_POST_USER', error: 'hoge error' });
      }
    })
  }
}

// 画面の遷移
export const historyPush = path => push(path);