import { SET_USERS } from '../actions/user_actions';

const users = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state
  }
}

export default users