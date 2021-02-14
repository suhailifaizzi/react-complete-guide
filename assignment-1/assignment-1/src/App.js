import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    username: 'my_username'
  }

  usernameChangedHandler = (event) => {
    this.setState(
      {username: event.target.value}  // bind this event will target the property value (in this case user text input has a property of value)
    )
  }

  render() {
    return (
      <div className="App">
        <UserOutput
          username={this.state.username} />
        <UserInput
          change={this.usernameChangedHandler}
          currentName={this.state.username} />
      </div>
    );
  }
}

export default App;
