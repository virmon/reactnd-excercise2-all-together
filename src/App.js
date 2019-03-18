import React, { Component } from 'react';
import logo from './logo.svg';
import Chatbox from './Chatbox';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
  	users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' }
    ]
  }

  addNewMessage = (newMessage) => {
  	this.setState(prevState => ({
    	messages: [...prevState.messages, newMessage]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
         	<Chatbox user={this.state.users[0].username} messages={this.state.messages} mailer={this.addNewMessage} />
			<Chatbox user={this.state.users[1].username} messages={this.state.messages} mailer={this.addNewMessage} />
        </div>
      </div>
    );
  }
}

export default App;
