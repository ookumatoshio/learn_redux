import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserList from './views/user_list';
import UserNew from './views/user_new';

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact path="/"
          render={() => <Redirect to="/user_list" />}
        />
        <Route
          exact path="/user_list"
          component={UserList}
        />
        <Route
          exact path="/user_new"
          component={UserNew}
        />
      </div>
    );
  }
}

export default App;
