// React
import React from 'react'
// Router
import { Switch, Redirect, Route } from 'react-router-dom'
// Component
import UserList from './views/user_list';
import UserNew from './views/user_new';

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/user_list" />
    <Route path="/user_list" component={UserList} />
    <Route path="/user_new" component={UserNew} />
  </Switch>
)

export default App;
