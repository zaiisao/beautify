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
		alert('A name was submitted: ' + this.uploadImage[0] + ", " + this.uploadOverlay[0]);
	}

	render() {
		return (
			<form ref={this.myRef} onSubmit={this.handleSubmit}>
				<input type="file" accept="image/png, image/jpeg" ref={(ref) => { this.uploadImage   = ref; }} />
				<input type="file" accept="image/png, image/jpeg" ref={(ref) => { this.uploadOverlay = ref; }} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default UploadForm;
