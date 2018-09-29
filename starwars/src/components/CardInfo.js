import React from 'react';
import './StarWars.css';

const CardInfo = (props) => {
    return (
        <div className="card-info">
            Name: {props.name}{" "}
            Height: {props.height}{" "}
            Mass: {props.mass}{" "}
            Hair Color: {props.hair_color}{" "}
            Skin Color: {props.skin_color}{" "}
            Eye Color: {props.eye_color}{" "}
            Birth Year{props.birth_year}{" "}
            Gender: {props.gender}{" "}
        </div>
    )
}

export default CardInfo;