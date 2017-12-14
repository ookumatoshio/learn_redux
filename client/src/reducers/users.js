import { FETCH_USERS } from '../actions';

const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    default:
      return state
  }
}

export default users