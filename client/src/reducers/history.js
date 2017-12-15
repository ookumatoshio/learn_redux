import { FETCH_USERS } from '../actions';
import { push } from 'react-router-redux'

const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH':
      push(action.path);
      return null;
    default:
      return null;
  }
}

export default users;