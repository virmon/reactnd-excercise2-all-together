import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewMessage extends Component {
	state = {
    	value: ''
    }
  	handleChange(value) {
    	this.setState({ value: value })
    }
	isDisabled = () => {
        if(this.state.value === ''){
           return true;
        } else {
          return false;
        }
    };
	sendMessage = (event) => {
    	event.preventDefault();
      	let newMessage = {
        	username: this.props.sender,
          	text: this.state.value
        }
        this.props.addNewMessage(newMessage);
      	this.setState({ value: '' });
    }
	render() {
    	return(
        	<div>
            	<form 
             		className="input-group"
             		onSubmit={this.sendMessage}
             	>
                    <input 
          				type="text"
          				className="form-control" 
          				placeholder="Enter your message..."
          				value={this.state.value}
          				onChange={event => this.handleChange(event.target.value)}
          			/>
                    <div className="input-group-append">
                      <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                      </button>
                    </div>
                </form>
             </div>
        )
    }
}

NewMessage.propTypes = {
	value: PropTypes.string.isRequired,
  	onChange: PropTypes.func.isRequired
}

export default NewMessage;