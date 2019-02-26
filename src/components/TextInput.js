import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = props.validation.bind(this);

    this.state = { valid: '' };
  }

  render() {
    return (
      <label
        htmlFor={this.props.name} 
        className={this.state.valid}
      >
        <span>{this.props.name}</span>
        <input 
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
        />
      </label>
    );
  }
}

export default TextInput;