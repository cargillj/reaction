import React, { Component } from 'react';
import './TextInput';
import TextInput from './TextInput';

class Password extends Component {

  passwordValidation(e) {
    const password = e.target.value;
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    const valid = re.test(password);
    this.setState({ valid: valid ? 'valid' : 'invalid' });
  }

  render() {
    return (
      <TextInput
        name="Password"
        type="password"
        placeholder="pwd"
        validation={this.passwordValidation}
      />
    );
  }
}

export default Password;