import React from 'react';

import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton';

import { Route } from 'react-router-dom'
// Component
import Login from '../login';
import UserList from '../user_list';
import UserNew from '../user_new';

class RootContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.location.pathname != '/login' &&
          <div>hoge</div>
        }
        <Route path="/login" component={Login} />
        <Route path="/user_list" component={UserList} />
        <Route path="/user_new" component={UserNew} />
      </div>
    );
  }
}

export default connect()(RootContainer);