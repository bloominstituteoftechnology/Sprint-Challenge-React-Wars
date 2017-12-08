import React, { Component } from 'react';
import './person.css';

class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    fetchAndSet = (address, destination) => {
        fetch(address)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ [destination] : data.name });
        })
        .catch(err => {
          throw new Error(err);
        });
    }

    componentDidMount () {
        this.fetchAndSet(this.props.bio.homeworld, 'homeworld');
        this.props.bio.vehicles.map((vehicle, i) => {
            this.fetchAndSet(vehicle, vehicle[{i}]);
        });
        this.setState({
            birth_year : this.props.bio.birth_year,
            eye_color : this.props.bio.eye_color,
            films : this.props.bio.films,
            gender : this.props.bio.gender,
            height : this.props.bio.height,
            mass : this.props.bio.mass,
            name : this.props.bio.name,
            skin_color : this.props.bio.skin_color,
            species : this.props.bio.species,
            starships : this.props.bio.starships,
            vehicles : this.props.bio.vehicles
        });
    }

    render () {
        console.log(this.state);
        return (
            <div className="characterCard">
                <h1 className="name">{this.state.name}</h1>
                <ul className="attributeList">
                    <li>Eye Color: {this.state.eye_color} <div className={"eye_color  " + this.state.eye_color}></div></li>
                    <li>Films</li>
                    <li>{this.state.homeworld}</li>
                    <li>{this.state.gender}</li>
                    <li>{this.state.height} cm</li>
                    <li>{this.state.mass} kg</li>
                    <li>{this.state.skin_color} skin</li>
                    <li>Species</li>
                    <li>Starships</li>
                    <li>{this.state.vehicle}</li>
                </ul>
            </div>
        );
    }
}

export default Person;