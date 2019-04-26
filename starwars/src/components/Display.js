import React from 'react';

import './StarWars.css';

const Display = props => {
    return (
        <div className="card-container">
            <h2>{props.characters.name}</h2>
            <p className="content">Birth Year: {props.characters.birth_year}</p>
            <p className="content">Created: {props.characters.created}</p>
            <p className="content">Edited: {props.characters.edited}</p>
            <p className="content">Eye Color :{props.characters.eye_color}</p>
            <p className="content url">{props.characters.films}</p>
            <p className="content">Gender: {props.characters.gender}</p>
            <p className="content">Hair Color: {props.characters.hair_color}</p>
            <p className="content">Height: {props.characters.height}</p>
            <p className="content url">{props.characters.homeworld}</p>
            <p className="content">Mass: {props.characters.mass}</p>
            <p className="content">Skin Color: {props.characters.skin_color}</p>
            <p className="content url">{props.characters.species}</p>
            <p className="content url">{props.characters.starships}</p>
            <p className="content url">{props.characters.vehicles}</p>
        </div>
    );
}


export default Display;