import React from 'react'

export class Text extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			firstName: '',
			lastName: '',
			radioCheckedElement: "Avengers",
		};

		this.handleChangeFN = this.handleChangeFN.bind(this);
		this.handleChangeLN = this.handleChangeLN.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadioForm = this.handleRadioForm.bind(this);
    }

	handleChangeFN(event) {
		this.setState({ firstName: event.target.value });
	}

	handleChangeLN(event) {
		this.setState({ lastName: event.target.value });
	}

	handleRadioForm(event) {
		this.setState({ radioCheckedElement: event.target.id });
	}

    handleSubmit(event) {
        //Do nothing, the default behavior
    }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<section>
					<div>
						<label for="fname">First name: </label>
						<input id="fname" type="text" value={this.state.firstName} onChange={this.handleChangeFN} name="fname" />
					</div>
					<div>
						<label for="lname">Last name: </label>
						<input id="lname" type="text" value={this.state.lastName} onChange={this.handleChangeLN} name="lname" />
					</div>

				</section>

				<section>
					<p>Favorite Movie</p>
					<div>
						<input type="radio" id="Avengers" name="fmovie" value="Avengers" checked={this.state.radioCheckedElement === 'Avengers'} onChange={this.handleRadioForm} />
						<label for="Avengers">Avengers</label>
					</div>
					<div>
						<input type="radio" id="DarkKnight" name="fmovie" value="Dark Knight" checked={this.state.radioCheckedElement === 'DarkKnight'} onChange={this.handleRadioForm} />
						<label for="DarkKnight">Dark Knight</label>
					</div>
					<div>
						<input type="radio" id="Tenet" name="fmovie" value="Tenet" checked={this.state.radioCheckedElement === 'Tenet'} onChange={this.handleRadioForm} />
						<label for="Tenet">Tenet</label>
					</div>
				</section>

				<br />

				<input type="submit" value="Done"></input>
			</form>
		);
	}
}
export default Text;