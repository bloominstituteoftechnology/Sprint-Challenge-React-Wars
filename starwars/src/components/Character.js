import React from 'react';
import './StarWars.css';

function Character(props) {
    return <div className="character">
        <p><strong>Name:</strong> {props.chara.name}</p>
        <p><strong>Gender:</strong> {props.chara.gender}</p>
        <p><strong>Hair Color:</strong> {props.chara.hair_color}</p>
        <p><strong>Eye Color:</strong> {props.chara.eye_color}</p>
        <p><strong>Birth Year:</strong> {props.chara.birth_year}</p>
        <p><strong>Height:</strong> {props.chara.height}</p>
        <p><strong>Mass:</strong> {props.chara.mass}</p>

    </div>;
}

export default Character;