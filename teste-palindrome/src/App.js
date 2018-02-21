import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    fetch('http://localhost:5000/api/palindrome?text=' + this.input.value)
    .then( result => result.json())
    .then(function(data) {
          alert('Result Palindrome: ' + data.retorno);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter the text to see if it is a palindrome:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>      
    );
  }
}

export default App;
