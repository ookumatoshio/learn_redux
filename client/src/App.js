// React
import React from 'react'
//
import { connect } from 'react-redux'
// Router
import { Route } from 'react-router-dom'
// Component
import Login from './views/login';
import UserList from './views/user_list';
import UserNew from './views/user_new';

import CommonHeader from './components/common_header';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.location.pathname !== '/login' &&
          <CommonHeader />
        }
        <Route path="/login" component={Login} />
        <Route path="/user_list" component={UserList} />
        <Route path="/user_new" component={UserNew} />
      </div>
    );
  }
}

export default connect()(App);
