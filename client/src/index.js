import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

const history = createHistory()

const store = createStore(
  routerReducer,
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