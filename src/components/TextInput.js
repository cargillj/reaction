import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = props.validation.bind(this);
    this.inputElement.bind(this);
    
    this.state = { valid: '' };
  }

  inputElement() {
    return (this.props.type !== 'textarea')
      ? <input 
        name={this.props.name} 
        type={this.props.type} 
        placeholder={this.props.placeholder} 
        onChange={this.onChange}
      />
      : <textarea
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        rows={this.props.rows || 5}
        cols={this.props.cols || 60}
      />
  }

  render() {
    return (
      <label
        htmlFor={this.props.name} 
        className={`${this.props.type} ${this.state.valid}`}
      >
        <span>{this.props.name}</span>
        {this.inputElement()}
      </label>
    );
  }
}

export default TextInput;