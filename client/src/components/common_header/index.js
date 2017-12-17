import React from 'react';

import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton';

import { historyPush } from '../../actions/common_actions';

class CommonHeader extends React.Component {
  logout() {
    this.props.dispatch(historyPush('/login'));
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="ログアウト"
          onClick={() => this.logout()}
        />
      </div>
    );
  }
}

export default connect()(CommonHeader);