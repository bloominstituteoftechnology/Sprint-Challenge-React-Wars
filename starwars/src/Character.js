import React, { Component } from 'react';
import './Character.css';

export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {},
        };
    }

    componentDidMount() {
        this.setState({character: this.props.character})
    }

    render() {
        return (
            <div className = "Character">
                <div className="name"><b>{this.state.character.name}</b></div>
                <div className="birth">Born in {this.state.character.birth_year}</div>
                <div className="eye_color">Eye Color: {this.state.character.eye_color}</div>
                <div className="gender">Gender: {this.state.character.gender}</div>
                <div className="hair_color">Hair Color: {this.state.character.hair_color}</div>
                <div className="height">Height: {this.state.character.height}</div>
                <div className="mass">Mass: {this.state.character.mass}</div>
                <div className="skin_color">Skin Color: {this.state.character.skin_color}</div>
            </div>

        )
    }
};