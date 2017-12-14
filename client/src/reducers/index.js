import { combineReducers } from 'redux';
import users from './users';
import errorDialog from './error_dialog';
import progress from './progress';

const reducers = combineReducers({
  errorDialog,
  progress,
  users,
})

export default reducers;