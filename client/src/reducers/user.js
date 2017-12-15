import { POST_USER } from '../actions';

import axios from 'axios';

const initialState = {
  name: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      return action.user;
    case 'SUCCESS_POST_USER':
      
    default:
      return state
  }
}

export default user;
