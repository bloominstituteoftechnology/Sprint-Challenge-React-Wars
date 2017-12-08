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

    fetchArray = (array, destination) => {
        const newArray = [];
        array.map((address) => {
            fetch(address)
            .then(res => {
            return res.json();
            })
            .then(data => {
            newArray.push(data.name);
            })
            .catch(err => {
            throw new Error(err);
            });
        });
        console.log(newArray);
        this.setState({ [destination] : newArray });
    }

    componentDidMount () {
        this.fetchAndSet(this.props.bio.species, 'species');
        this.fetchAndSet(this.props.bio.homeworld, 'homeworld');
        this.fetchArray(this.props.bio.starships, 'starships');
        this.fetchArray(this.props.bio.vehicles, 'vehicles');
        
        this.setState({
            birth_year : this.props.bio.birth_year,
            eye_color : this.props.bio.eye_color,
            films : this.props.bio.films,
            gender : this.props.bio.gender,
            height : this.props.bio.height,
            mass : this.props.bio.mass,
            name : this.props.bio.name,
            skin_color : this.props.bio.skin_color,
        });
    }

    render () {
        return (
            <div className="characterCard">
                <h1 className="name">{this.state.name}</h1>
                <ul className="attributeList">
                    <li>Eye Color: {this.state.eye_color} <div className={"eye_color  " + this.state.eye_color}></div></li>
                    <li>Films: </li>
                    <li>Homeworld: {this.state.homeworld}</li>
                    <li>Gender: {this.state.gender=== "n/a" ? "droid" : this.state.gender}</li>
                    <li>Height: {this.state.height} cm</li>
                    <li>Mass: {this.state.mass} kg</li>
                    <li>Skin color: {this.state.skin_color} skin</li>
                    <li>Species: {this.state.species}</li>
                    {this.state.starships ? <li>Starships: {this.state.starships.map((starship) => starship + ", ")}</li> : null}
                    {this.state.vehicles ? <li>Vehicles: {this.state.vehicles.map((vehicle) => vehicle + ", ")}</li> : null}
                </ul>
            </div>
        );
    }
}

export default Person;