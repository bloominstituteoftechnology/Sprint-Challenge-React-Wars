import React, { Component } from 'react';
import './StarWars.css';

class Character extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    componentDidMount() {
        this.setState({names: this.props.datum.name})
    }

    render() {
        return (            
            <div className="character">
                <div className="thumbnail"></div>
                <div>
                <div className="character__description"><div className="prop">Name:</div>{this.props.datum.name}</div>
                <div className="character__description"><div className="prop">Height:</div> {this.props.datum.height}</div>
                <div className="character__description"><div className="prop">Mass:</div> {this.props.datum.mass}</div>
                <div className="character__description"><div className="prop">Hair Color:</div> {this.props.datum.hair_color}</div>
                <div className="character__description"><div className="prop">Eye Color:</div>{this.props.datum.eye_color}</div>
                <div className="character__description"><div className="prop">Birth Year:</div> {this.props.datum.birth_year}</div>
                <div className="character__description"><div className="prop">Gender:</div> {this.props.datum.gender}</div>
                <div className="character__description"><div className="prop">Homeworld:</div> {this.props.datum.homeworld}</div>
                <div className="character__description"><div className="prop">Films: </div><div>{this.props.datum.films.map(item => <div>{item}</div>)}</div></div>
                <div className="character__description"><div className="prop">Species: </div><div>{this.props.datum.species.map(item => <div>{item}</div>)}</div></div>
                <div className="character__description"><div className="prop">Vehicles: </div><div>{this.props.datum.vehicles.map(item => <div>{item}</div>)}</div></div>
                <div className="character__description"><div className="prop">Starships: </div><div>{this.props.datum.starships.map(item => <div>{item}</div>)}</div></div>
                <div className="character__description"><div className="prop">Created:</div> {this.props.datum.created}</div>
                <div className="character__description"><div className="prop">Edited:</div> {this.props.datum.edited}</div>
                </div>
            </div>
        );
    }
}



export default Character;