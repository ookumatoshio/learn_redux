import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import users from './users';
import errorDialog from './error_dialog';
import authReducer from './auth';

const reducers = combineReducers({
  routerReducer,
  authReducer,
  users,
});

export default reducers;