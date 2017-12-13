const users = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.users;
    case 'hoge':
      console.log(action.error);
      return [];
    default:
      return state
  }
}

export default users