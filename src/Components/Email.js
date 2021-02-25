import React from 'react'

export class Email extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
		};

		this.handleChangeEM = this.handleChangeEM.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEM(event) {
		this.setState({ email: event.target.value });
	}

	handleSubmit(event) {
		//Validate email only
		event.preventDefault();

		var email_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var message = document.getElementById("message");
		var email = this.state.email;
		if (email.match(email_format) && (email.endsWith(".com") || email.endsWith(".edu"))) {
			message.innerHTML = "Email successfully recorded";
			return false;
		}
		else {
			message.innerHTML = "Invalid email address";
			return false;
		}
	}

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<section>
						<div>
							<label for="email_address">Please enter your email: </label>
							<input id="email_address" type="text" value={this.state.email} onChange={this.handleChangeEM} name="email_address" />
						</div>

					</section>

					<input type="submit" value="submit"></input>
				</form>

				<p id="message"></p>
			</React.Fragment>
		);
	}
}
export default Email;