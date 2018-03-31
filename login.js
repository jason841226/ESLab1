import React from 'react';
import Chat from './Chat';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' , password: ''};

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value, password: this.state.password });
  }
  passwordChangeHandler(event) {
    this.setState({ password: event.target.value, username: this.state.username });
  }
  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username , password: this.state.password });
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (

        <ChatApp username={this.state.username}/>

      );
    }

    // Initial page load, show a simple login form
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>React Instant Chat</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required />
          <input
            type="text"
            onChange={this.passwordChangeHandler}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
App.defaultProps = {
};

export default App;