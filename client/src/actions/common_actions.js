import { push } from 'react-router-redux';

export const historyPush = path => push(path);

export const setSystemErrors = (errors) => {
  return {
    type: 'SET_SYSTEM ERRORS',
    systemErrors: errors,
  }
}