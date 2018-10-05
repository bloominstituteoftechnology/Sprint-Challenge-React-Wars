import React from 'react';

import './StarWars.css';

const Display = props => {
    return (
        <div className="card-container">
            <h2>{props.characters.name}</h2>
            <p className="content">{props.characters.birth_year}</p>
            <p className="content">{props.characters.created}</p>
            <p className="content">{props.characters.edited}</p>
            <p className="content">{props.characters.eye_color}</p>
            <p className="content url">{props.characters.films}</p>
            <p className="content">{props.characters.gender}</p>
            <p className="content">{props.characters.hair_color}</p>
            <p className="content">{props.characters.height}</p>
            <p className="content">{props.characters.homeworld}</p>
            <p className="content">{props.characters.mass}</p>
            <p className="content">{props.characters.skin_color}</p>
            <p className="content">{props.characters.species}</p>
            <p className="content">{props.characters.starships}</p>
            <p className="content">{props.characters.vehicles}</p>
        </div>
    );
}


export default Display;