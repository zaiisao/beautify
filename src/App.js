import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="file" id="image" name="image" accept="image/png, image/jpeg" />
        <input type="file" id="overlay" name="overlay" accept="image/png, image/jpeg" />
        <input type="submit" />
      </div>
    );
  }
}

export default App;
