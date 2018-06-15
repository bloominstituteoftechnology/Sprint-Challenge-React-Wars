import React, {Component} from 'react';

import Card from '../elements/Card';

class CharacterCard extends Component {
	constructor(props){
		super(props)
		this.state = {
			vehicle: '',
			species: '',
			starship: '',
		}
	}
	componentDidMount() {
		this.getSpecies(this.props.character.species[0]);
		if (this.props.character.vehicles.length > 0){
			this.getVehicle(this.props.character.vehicles[0]);

		}
		if (this.props.character.starships.length > 0){
			this.getStarship(this.props.character.starships[0]);

		}
	}

	getSpecies = URL => {
	// feel free to research what this code is doing.
	// At a high level we are calling an API to fetch some starwars data from the open web.
	// We then take that data and resolve it our state.
	fetch(URL)
		.then(res => {
		return res.json();
		})
		.then(data => {
		this.setState({ species: data.name });
		})
		.catch(err => {
		throw new Error(err);
		});
	};
	getVehicle = URL => {

		fetch(URL)
			.then(res => {
			return res.json();
			})
			.then(data => {
			this.setState({ vehicle: data.name });
			})
			.catch(err => {
			throw new Error(err);
			});
	};
	getStarship = URL => {
		fetch(URL)
			.then(res => {
			return res.json();
			})
			.then(data => {
			this.setState({ starship: data.name });
			})
			.catch(err => {
			throw new Error(err);
			});
	};
	render(){
		return (
			<Card>
				<h2>{this.props.character.name}</h2>
				<p>Born: {this.props.character.birth_year}</p>
				<p>{this.props.character.name} has {this.props.character.eye_color} eyes</p>
				<p>Species: {this.state.species ? this.state.species : <p>Loading...</p>}</p>
				{
					this.state.vehicle ? 
					<p>When on land, {this.props.character.name} usually drives a {this.state.vehicle}</p> :
					<p>Unfortunately, {this.props.character.name} doesn't really own any land vehicles.</p>
				}
				{
					this.state.starship ? 
					<p>When in space, {this.props.character.name} is all about dat {this.state.starship}</p> :
					<p>{this.props.character.name} is a scrub and aint got no spaceships.</p>
				}

			</Card>
		);
	}	
};

export default CharacterCard;