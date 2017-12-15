const errorDialog = (state = { open: false }, action) => {
  console.log('in errorDialog', action);
  if (action === undefined) {
    return state;
  }
  switch (action.type) {
    case 'IS_OPEN':
      return { open: action.open };
    default:
      return state
  }
}

export default errorDialog;
