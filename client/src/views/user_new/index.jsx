import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField, CircularProgress, Snackbar } from 'material-ui';
import { push } from 'react-router-redux'
import api from '../../api';

class UserNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isRequesting: false,
      open: false,
    }
  }
  handleCreate() {
    const params = { name: this.state.text };

    this.setState({ isRequesting: true });
    api.post('users', params).then((res) => {
      this.setState({ isRequesting: false });
      if (res.success) {
        this.props.history.push('/user_list');
      } else {
        this.setState({ open: true });
      }
    });
  }
  render() {
    return (
      <div>
        <div>User New</div>
        <br />
        <RaisedButton label="戻る" onClick={() => this.props.dispatch(push('/user_list'))} />

        <br />
        <TextField
          hintText="Hint Text"
          onChange={e => this.setState({ text: e.target.value })}
        />

        <br />
        <RaisedButton label="登録" onClick={this.handleCreate.bind(this)} />
        {this.state.isRequesting && <CircularProgress /> }

        <br />
        <Snackbar
          open={this.state.open}
          message="登録に失敗しました。"
          autoHideDuration={2000}
          onRequestClose={() => this.setState({ open: false })}
        />
      </div>
    );
  }
}

export default connect()(UserNew);