import React from 'react';

const Character = (props) => {
    return(
    <div>
        <h3>{props.name}</h3>
        <p>Height: {props.height}</p>
        <p>Eye Color: {props.eye_color}</p>
        <p>Birth Year: {props.birth_year}</p>
        <p>Hair Color: {props.hair_color}</p>
        <p>Gender: {props.gender}</p>
        <p>Skin Color: {props.skin_color}</p>
        <p>Mass: {props.mass}</p>

    </div>
    )}

export default Character;