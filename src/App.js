import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Password from './components/Password';
import TextInput from './components/TextInput';
import Card from './components/Card';

class App extends Component {
  validateText() {
    this.setState({valid: 'valid'});
  }
  
  render() {
    return (
      <div className="App">
        <h1>UI Kit</h1>
        <h2>Buttons</h2>
        <section>
          <Button>
            Neutral
          </Button>
          <Button context="positive">
            Positive
          </Button>
          <Button context="negative">
            Negative
          </Button>
        </section>
        <h2>Input</h2>
        <section>
          <Password placeholder="pwd"/>
          <TextInput 
            name="text" 
            type="text" 
            placeholder="type stuff here"
            validation={this.validateText}
          />
        </section>
        <section>
          <TextInput
            name="textarea"
            type="textarea"
            placeholder="type more stuff here"
            validation={this.validateText}
          />
        </section>
        <h2>Card</h2>
        <section>
          <Card>
            Hello, this is a card
          </Card>
        </section>
      </div>
    );
  }
}

export default App;
