import { OPEN_ERROR_DIALOG } from '../actions/error_dialog';

const initialState = {
  open: false,
  title: null,
}

const errorDialog = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ERROR_DIALOG:
      return {
        open: action.payload.open,
        title: action.payload.message,
      };
    default:
      return state
  }
}

export default errorDialog;
