import React, { Component } from 'react';
import './StarWars.css';

const CharacterCard = props => {
    return (
        <div class = 'card' id={props.char.created}>
            <h2>{props.char.name}</h2>
            <p>Birth Year: {props.char.birth_year}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Height: {props.char.height}</p>
            <p>Eye Color: {props.char.eye_color}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Skin Color: {props.char.skin_color}</p>
            <p>Weight: {props.char.mass}</p>
        </div>
    )
}

export default CharacterCard;