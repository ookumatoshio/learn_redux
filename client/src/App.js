import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { push } from 'react-router-redux'

import UserList from './views/user_list';
import UserNew from './views/user_new';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

const App = () => (
  <ConnectedSwitch>
    <Route
      exact path="/"
      render={() => <Redirect to="/user_list" />}
    />
    <Route
      exact
      path="/user_list"
      component={UserList}
    />
    <Route
      exact
      path="/user_new"
      component={UserNew}
    />
  </ConnectedSwitch>
)

const mapStateToProps = (state) => {
  return { location: state.location };
}

export default connect(mapStateToProps)(App)