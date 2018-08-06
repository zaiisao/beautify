import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="file" id="image" name="image" accept="image/png, image/jpeg" />
          <input type="file" id="overlay" name="overlay" accept="image/png, image/jpeg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
