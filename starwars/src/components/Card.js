import React from 'react';
import './StarWars.css';

const Card =(props) => {
    return (
        <div>
            <h2 className="character-name">{props.char.name}</h2>
            <p><strong>Birth Year</strong>: {props.char.birth_year}</p>
            <p><strong>Gender</strong>: {props.char.gender}</p>
            <p><strong>Eye Color</strong>: {props.char.eye_color}</p>
            <p><strong>Hair Color</strong>: {props.char.hair_color}</p>
            <p><strong>Skin Color</strong>: {props.char.skin_color}</p>
            <p><strong>Mass</strong>: {props.char.mass}-kg</p>
            <p><strong>Height</strong>: {props.char.height}-cm</p>
            <p><strong># of Films</strong>: {props.char.films.length}</p>
            <p><strong># of Vehicles</strong>: {props.char.vehicles.length}</p>
            <p><strong># of Starships</strong>: {props.char.starships.length}</p>
            <p><strong># of Species</strong>: {props.char.species.length}</p>
            <p><strong>Created</strong>: {props.char.created}</p>
            <p><strong>Modified</strong>: {props.char.edited}</p> 
        </div>
    )
}

export default Card;