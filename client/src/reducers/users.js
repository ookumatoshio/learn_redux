import { FETCH_USERS } from '../actions';

const users = (state = [], action) => {
  console.log('in users', action);
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    default:
      return state
  }
}

export default users