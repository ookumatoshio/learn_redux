import { OPEN_ERROR_DIALOG } from '../actions';

const errorDialog = (state = { open: false }, action) => {
  switch (action.type) {
    case OPEN_ERROR_DIALOG:
      return { open: action.open };
    default:
      return state
  }
}

export default errorDialog;
