import { FETCH_USERS } from '../actions';

const users = (state = [], action) => {
  console.log('in users', action);
  if (action === undefined) {
    return state;
  }
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    default:
      return state
  }
}

export default users