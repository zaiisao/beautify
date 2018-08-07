import React, { Component } from 'react';

class UploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
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
			<form ref={this.myRef} onSubmit={this.handleSubmit}>
				<input type="file" id="image" name="image" accept="image/png, image/jpeg" />
				<input type="file" id="overlay" name="overlay" accept="image/png, image/jpeg" />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default UploadForm;
