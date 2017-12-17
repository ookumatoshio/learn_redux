import React from 'react';

import { connect } from 'react-redux'

import { Dialog, FlatButton } from 'material-ui';

class ErrorDialog extends React.Component {
  setTitle(message) {
    console.log(message)
    switch(message) {
      case 'hogeError':
        return 'ほげエラー';
      default:
        return 'その他のエラー';
    }
  }

  setActions(message) {
    switch(message) {
      case 'hogeError':
        return this.hogeErrorAction();
      default:
        return this.defaultAction();
    }
  }

  handleClose() {
    console.log('close');
  }

  hogeErrorAction() {
    return [
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
  }

  defaultAction() {
    return [
      <FlatButton
        label="閉じる"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
  }

  render() {
    const { title, open } = this.props.errorDialog;

    return (
      <Dialog
        title={this.setTitle(title)}
        open={open}
        actions={this.setActions(title)}
      />
    );
  }
}

export default ErrorDialog;
