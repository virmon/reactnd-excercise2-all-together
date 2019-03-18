import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import NewMessage from './NewMessage';

class Chatbox extends Component {
    
	render() {
    	return(
              <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{this.props.user}</div>
                <MessageList name={this.props.user} messages={this.props.messages} />
				<NewMessage sender={this.props.user} addNewMessage={this.props.mailer} />
              </div>
        )
    }
}

Chatbox.propTypes = {
	name: PropTypes.string.isRequired,
  	messages: PropTypes.string.isRequired,
  	sender: PropTypes.string.isRequired,
  	addNewMessage: PropTypes.func.isRequired
}

export default Chatbox;