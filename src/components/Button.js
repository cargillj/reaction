import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button className={`Btn ${this.props.context}`}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;