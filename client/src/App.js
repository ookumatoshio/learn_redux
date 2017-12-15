import React from 'react'

import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import RaisedButton from 'material-ui/RaisedButton';

import Home from './views/home';
import Login from './views/login';

class PrivateRouteContainer extends React.Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
          )
        }
      />
    )
  }
}

const PrivateRoute = connect(state => ({
  isAuthenticated: state.authReducer.isAuthenticated
}))(PrivateRouteContainer)

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <PrivateRoute exact path="/" component={Home} />
  </Switch>
)

export default App;
