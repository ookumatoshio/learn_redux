import { createAction } from 'redux-actions';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = createAction(FETCH_USERS);

export default createAction(
  {
    [FETCH_USERS]: (...args) => { s }
  },
  FETCH_USERS,
);