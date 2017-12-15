import React from 'react';

import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import axios from 'axios';

import { RaisedButton, TextField } from 'material-ui';

class UserNewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNameText: '',
    }
  }

  post() {
    axios.post('http://localhost:3000/users', { name: this.state.inputNameText }).then(res => res.data)
    .then((res) => {
      if (!res.success) {
        console.log('enter name');
      } else {
        this.props.push('/user_list');
      }
    });
  }

  render() {
    return (
      <div>
        <h1>User New</h1>

        <RaisedButton
          label="一覧へ"
          style={{ marginBottom: 10 }}
          onClick={() => this.props.push('/user_list')}
        />

        <div>
          <TextField
            hintText="Hint Text"
            onChange={e => this.setState({ inputNameText: e.target.value })}
          />
        </div>

        <RaisedButton
          label="登録"
          style={{ marginBottom: 10 }}
          onClick={() => this.post()}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: path => dispatch(push(path)),
    post: () => dispatch({ type: 'POST_USER', user: { name: 'hoge' } }),
  };
};

export default connect(null, mapDispatchToProps)(UserNewContainer);