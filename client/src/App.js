// React
import React from 'react'
//
import { connect } from 'react-redux'
// Router
import { Route } from 'react-router-dom'
// UI
import { Dialog } from 'material-ui';
// Component
import Login from './views/login';
import UserList from './views/user_list';
import UserNew from './views/user_new';

import CommonHeader from './components/common_header';
import ErrorDialog from './components/error_dialog';

import { historyPush } from './actions/common_actions';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.location.pathname !== '/login' &&
          <CommonHeader
            logout={path => this.props.dispath(historyPush('/login'))}
          />
        }
        <Route path="/login" component={Login} />
        <Route path="/user_list" component={UserList} />
        <Route path="/user_new" component={UserNew} />

        <ErrorDialog errorDialog={this.props.errorDialog} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  errorDialog: store.errorDialog,
});

export default connect(mapStateToProps)(App);
