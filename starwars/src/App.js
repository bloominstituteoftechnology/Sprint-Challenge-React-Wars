import React, { Component } from 'react';
import RWarList from './components/RWarList';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: [],
			nextCharacter: [],
		};
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people');
	}

	getCharacters = (URL) => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					starwarsChars: data.results,
					nextCharacter: data.next,
				});
			})
			.catch((err) => {
				throw new Error(err);
			});
	};

	nextCharacterHandler = () => {
		if (this.getCharacters(this.state.nextCharacter)) {
			this.setState({
				starwarsChars: this.state.nextCharacter,
			});
		}
	};
	render() {
		return (
			<div className="App">
				{/* <h1 className="Header">React Wars</h1> */}
				<RWarList characters={this.state.starwarsChars} />
				<button onClick={this.nextCharacterHandler}>Next Character</button>
			</div>
		);
	}
}

export default App;
