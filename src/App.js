import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UploadForm from './UploadForm.js';

class App extends Component {
  constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<UploadForm />
			</div>
		);
	}
}

export default App;
