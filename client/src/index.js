// React
import React from 'react'
import { render } from 'react-dom'
// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
// Router
import { Switch, Redirect, Route } from 'react-router-dom'
// History
import createHistory from 'history/createBrowserHistory'
// UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Reducer
import Reducers from './reducers';
// Component
import App from './App';

const history = createHistory()
const store = createStore(
  Reducers,
  applyMiddleware(routerMiddleware(history)),
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <Switch>
          <Redirect exact from="/" to="/user_list" />
          <Route path="/" component={App} />
        </Switch>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)