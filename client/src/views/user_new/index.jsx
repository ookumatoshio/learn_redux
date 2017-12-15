import React from 'react';
// Redux
import { connect } from 'react-redux'
// Request
import axios from 'axios';
// UI
import { RaisedButton, TextField } from 'material-ui';
// ActionCreator
import { postUser, historyPush } from '../../actions';

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
        this.props.historyPush('/user_list');
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
          onClick={() => this.props.historyPush('/user_list')}
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
          onClick={() => this.props.postUser({ name: this.state.inputNameText })}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    historyPush,
    postUser: user => dispatch(postUser(user)),
  };
};

// postのロジックをどうするか？
// dispatchを呼ぶということは、ステートを変えるということ。
// postは非同期処理の中でステートを変えるので、dispatchの中で非同期処理をするのではなく、
// 非同期処理の中でdispatchを呼ぶような処理になる。
// actionの中で非同期を呼ぶ方法もあるが、その場合はthunkなどのライブラリが必要になると思う。

export default connect(null, mapDispatchToProps)(UserNewContainer);