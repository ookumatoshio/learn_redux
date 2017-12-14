const users = (state = [], action) => {
  console.log('in users');
  switch (action.type) {
    case 'FETCH_USERS':
      console.log(action);
      return [];
    default:
      return state
  }
}

export default users