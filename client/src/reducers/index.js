import { combineReducers } from 'redux';
import users from './users';
import errorDialog from './error_dialog';

const reducers = combineReducers({
  errorDialog,
  users,
})

export default reducers;