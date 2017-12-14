import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dialog, FlatButton } from 'material-ui';

import UserList from './views/user_list';
import UserNew from './views/user_new';

class App extends Component {
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.props.errorDialog.open}
          onRequestClose={() => this.props.dispatch({ type: 'IS_OPEN', open: false })}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
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

const mapStateToProps = (state) => {
  return { errorDialog: state.errorDialog };
}

export default connect(mapStateToProps)(App);
