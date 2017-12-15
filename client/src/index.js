import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Reducers from './reducers';

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
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)