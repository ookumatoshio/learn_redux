import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class CommonHeader extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton
          label="ログアウト"
          onClick={() => this.props.logout()}
        />
      </div>
    );
  }
}

export default CommonHeader;