import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput.js';
import Validation from './Validation/Validation.js'
import Char from './Char/Char.js';

class App extends Component {
  state = {
    input: ''
  }

  inputChangedHandler = (event) => {
    this.setState(
      {input: event.target.value}
    );
  }

  deleteCharHandler = (index) => {
    const text = this.state.input.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({input: updatedText});
  }

  render() {
    const charList = this.state.input.split('').map( (char, index) => {
      return <Char
        character={char}
        key={index}
        clicked={ () => this.deleteCharHandler(index)} />
    })
    return (
      <div className="App">
        <UserInput
          change={this.inputChangedHandler}
          currentInput={this.state.input} />
        <p>{this.state.input}</p>
        <Validation
          inputLength={this.state.input.length} />
        {charList}
      </div>
    );
  }
}

export default App;
