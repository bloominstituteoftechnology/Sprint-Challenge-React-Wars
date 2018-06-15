import React from 'react';

const Card = (props) => {
    return (
        <div className="stats">
            <h2>Name: {props.name}</h2>
            <h2>Birth Year: {props.birth_year}</h2>
            <h2>Gender: {props.gender}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Mass: {props.mass}</h2>
            <h2>Skin Color: {props.skin_color}</h2>
            <h2>Eye Color: {props.eye_color}</h2>
            <h2>Hair Color: {props.hair_color}</h2>
        </div>
    )
}

export default Card