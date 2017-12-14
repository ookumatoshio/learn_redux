const errorDialog = (state = { open: false }, action) => {
  console.log('in errorDialog');
  switch (action.type) {
    case 'IS_OPEN':
      return { open: action.open };
    default:
      return state
  }
}

export default errorDialog;
