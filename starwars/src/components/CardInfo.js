import React from 'react';
import './StarWars.css';

const CardInfo = (props) => {
    return (
        <div className="card-info">
            <p>Name: {props.name}</p>
            <p>Height: {props.height} cm</p>
            <p>Mass: {props.mass} kg</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default CardInfo;