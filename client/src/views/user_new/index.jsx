import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class UserNew extends React.Component {
  render() {
    return (
      <div>
        <div>User New</div>
        <br />
        <RaisedButton label="戻る" onClick={() => this.props.history.push('/user_list')} />
      </div>
    );
  }
}

export default UserNew;